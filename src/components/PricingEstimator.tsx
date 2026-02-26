'use client';

import React, { useState } from 'react';
import {
  Home,
  Truck,
  Music,
  Camera,
  Package,
  Check,
} from 'lucide-react';
import {
  PricingInputs,
  defaultPricingInputs,
  ServiceType,
  OffsitePackage,
  VenueAddOn,
  CateringOption,
  BalloonSize,
  offsitePackages,
  venueAddOnDetails,
  cateringOptions,
  balloonSizes,
  getVenueHourlyRate,
  calculateEstimate,
  BASE_DURATION_HOURS,
  BARTENDER_PRICE_PER_PERSON,
  MAX_VENUE_GUESTS,
  EXTRA_HOUR_RATE_OFFSITE,
} from '@/config/pricing';
import StickyEstimatePanel from './StickyEstimatePanel';
import MobileEstimateBar from './MobileEstimateBar';

interface OptionCardProps {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  price?: string;
}

function OptionCard({ selected, onClick, icon, title, description, badge, price }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 group ${
        selected
          ? 'border-vice-cyan bg-vice-cyan/5 shadow-glow-cyan'
          : 'border-vice-ink/10 bg-white hover:border-vice-cyan/40 hover:shadow-soft'
      }`}
    >
      {badge && (
        <span className="absolute -top-3 right-4 glow-plate glow-plate-gold px-3 py-0.5 rounded-full text-xs font-bold">
          {badge}
        </span>
      )}
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            selected
              ? 'bg-gradient-to-br from-vice-cyan to-vice-pink text-white'
              : 'bg-vice-ink/5 text-vice-ink/60 group-hover:bg-vice-cyan/10 group-hover:text-vice-cyan'
          }`}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-vice-ink text-lg">{title}</h4>
            {price && <span className="text-vice-pink font-bold text-lg">{price}</span>}
          </div>
          <p className="text-vice-muted text-sm mt-1 leading-relaxed">{description}</p>
        </div>
        <div
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
            selected ? 'border-vice-cyan bg-vice-cyan text-white' : 'border-vice-ink/20'
          }`}
        >
          {selected && <Check size={14} />}
        </div>
      </div>
    </button>
  );
}

interface ToggleCardProps {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  description: string;
  price: string;
  children?: React.ReactNode;
}

function ToggleCard({ checked, onChange, label, description, price, children }: ToggleCardProps) {
  return (
    <div
      className={`w-full rounded-xl border-2 transition-all duration-200 overflow-hidden ${
        checked
          ? 'border-vice-cyan bg-vice-cyan/5'
          : 'border-vice-ink/10 bg-white hover:border-vice-cyan/30'
      }`}
    >
      <button
        onClick={() => onChange(!checked)}
        className="w-full text-left p-4"
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              checked ? 'border-vice-cyan bg-vice-cyan text-white' : 'border-vice-ink/25'
            }`}
          >
            {checked && <Check size={12} />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-vice-ink">{label}</span>
              <span className="text-vice-pink font-bold text-sm">{price}</span>
            </div>
            <p className="text-vice-muted text-xs mt-0.5">{description}</p>
          </div>
        </div>
      </button>
      {checked && children && (
        <div className="px-4 pb-4 pt-0">
          {children}
        </div>
      )}
    </div>
  );
}

interface SubOptionProps {
  selected: boolean;
  onClick: () => void;
  label: string;
  price: string;
  description?: string;
}

function SubOption({ selected, onClick, label, price, description }: SubOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg border transition-all ${
        selected
          ? 'border-vice-cyan bg-vice-cyan/10'
          : 'border-vice-ink/10 bg-white hover:border-vice-cyan/30'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
              selected ? 'border-vice-cyan bg-vice-cyan' : 'border-vice-ink/25'
            }`}
          >
            {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>
          <span className={`text-sm ${selected ? 'font-semibold text-vice-ink' : 'text-vice-muted'}`}>
            {label}
          </span>
        </div>
        <span className={`text-sm font-bold ${selected ? 'text-vice-pink' : 'text-vice-muted'}`}>
          {price}
        </span>
      </div>
      {description && (
        <p className="text-xs text-vice-muted mt-1 ml-6">{description}</p>
      )}
    </button>
  );
}

export default function PricingEstimator() {
  const [inputs, setInputs] = useState<PricingInputs>({
    ...defaultPricingInputs,
    serviceType: 'we-come-to-you',
    offsitePackage: 'bundle',
  });

  const handleServiceTypeChange = (v: ServiceType) => {
    setInputs((p) => ({
      ...p,
      serviceType: v,
      offsitePackage: v === 'we-come-to-you' ? (p.offsitePackage || 'bundle') : null,
    }));
  };

  const result = calculateEstimate(inputs);
  const isReady = inputs.serviceType !== null && (
    inputs.serviceType === 'host-here' || inputs.offsitePackage !== null
  );

  const hourlyRate = inputs.serviceType === 'host-here'
    ? getVenueHourlyRate(Math.min(inputs.guestCount, MAX_VENUE_GUESTS))
    : null;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
          <section className="neon-card p-6">
            <h3 className="font-display text-xl font-black text-vice-ink mb-4">
              Service Type
            </h3>
            <div className="space-y-3">
              <OptionCard
                selected={inputs.serviceType === 'we-come-to-you'}
                onClick={() => handleServiceTypeChange('we-come-to-you')}
                icon={<Truck size={24} />}
                title="We Come To You"
                description="DJ and/or Photo Booth services at your venue of choice"
                price="from $600"
              />
              <OptionCard
                selected={inputs.serviceType === 'host-here'}
                onClick={() => handleServiceTypeChange('host-here')}
                icon={<Home size={24} />}
                title="Host Here"
                description="Our premium pool venue -- hourly rate based on guest count"
                price={inputs.guestCount <= MAX_VENUE_GUESTS ? `$${hourlyRate || getVenueHourlyRate(inputs.guestCount)}/hr` : 'Custom'}
              />
            </div>
          </section>

          <section className="neon-card p-6">
            <h3 className="font-display text-xl font-black text-vice-ink mb-2">
              Guest Count
            </h3>
            <p className="text-vice-muted text-sm mb-5">Helps us size everything properly</p>

            <div className="flex items-center justify-center mb-4">
              <div className="glow-plate glow-plate-cyan px-6 py-3 rounded-xl">
                <span className="text-4xl font-black">{inputs.guestCount}</span>
                <span className="text-base font-semibold ml-2 opacity-80">guests</span>
              </div>
            </div>

            <div className="px-2">
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={inputs.guestCount}
                onChange={(e) => setInputs((p) => ({ ...p, guestCount: parseInt(e.target.value) }))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer accent-vice-cyan"
                style={{
                  background: `linear-gradient(to right, #00E7FF ${((inputs.guestCount - 10) / 90) * 100}%, rgba(11,16,32,0.1) ${((inputs.guestCount - 10) / 90) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-vice-muted mt-2">
                <span>10</span>
                <span>100</span>
              </div>
            </div>

            {inputs.serviceType === 'host-here' && inputs.guestCount > MAX_VENUE_GUESTS && (
              <p className="text-center text-sm text-vice-pink font-semibold mt-4">
                Venue max is 80 guests. Contact us for custom quote.
              </p>
            )}
          </section>

          <section className="neon-card p-6">
            <h3 className="font-display text-xl font-black text-vice-ink mb-2">
              Duration
            </h3>
            <p className="text-vice-muted text-sm mb-5">
              {inputs.serviceType === 'we-come-to-you'
                ? `${BASE_DURATION_HOURS} hours included in base price`
                : 'Select your party duration'}
            </p>

            <div className="flex items-center justify-center mb-4">
              <div className="glow-plate glow-plate-pink px-6 py-3 rounded-xl">
                <span className="text-4xl font-black">{inputs.durationHours}</span>
                <span className="text-base font-semibold ml-2 opacity-80">hours</span>
              </div>
            </div>

            <div className="px-2">
              <input
                type="range"
                min={2}
                max={inputs.serviceType === 'host-here' ? 8 : 6}
                step="1"
                value={inputs.durationHours}
                onChange={(e) => setInputs((p) => ({ ...p, durationHours: parseInt(e.target.value) }))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #FF3BD4 ${((inputs.durationHours - 2) / ((inputs.serviceType === 'host-here' ? 8 : 6) - 2)) * 100}%, rgba(11,16,32,0.1) ${((inputs.durationHours - 2) / ((inputs.serviceType === 'host-here' ? 8 : 6) - 2)) * 100}%)`,
                }}
              />
              <div className="flex justify-between text-xs text-vice-muted mt-2">
                <span>2h</span>
                <span>{inputs.serviceType === 'host-here' ? '8h' : '6h'}</span>
              </div>
            </div>

            {inputs.serviceType === 'host-here' && hourlyRate && (
              <p className="text-center text-sm text-vice-muted mt-4">
                ${hourlyRate}/hr x {inputs.durationHours} hours = <span className="font-bold text-vice-ink">${(hourlyRate * inputs.durationHours).toLocaleString()}</span>
              </p>
            )}

            {inputs.serviceType === 'we-come-to-you' && inputs.durationHours > BASE_DURATION_HOURS && (
              <p className="text-center text-sm text-vice-pink font-semibold mt-4">
                +{inputs.durationHours - BASE_DURATION_HOURS} extra hour{inputs.durationHours - BASE_DURATION_HOURS > 1 ? 's' : ''} @ ${EXTRA_HOUR_RATE_OFFSITE}/hr = <span className="text-vice-ink">${(inputs.durationHours - BASE_DURATION_HOURS) * EXTRA_HOUR_RATE_OFFSITE}</span>
              </p>
            )}
          </section>

          {inputs.serviceType === 'we-come-to-you' && (
            <section className="neon-card p-6">
              <h3 className="font-display text-xl font-black text-vice-ink mb-2">
                Entertainment Package
              </h3>
              <p className="text-vice-muted text-sm mb-5">Select your services</p>

              <div className="space-y-3">
                {(Object.keys(offsitePackages) as OffsitePackage[]).map((key) => {
                  const pkg = offsitePackages[key];
                  const icons: Record<OffsitePackage, React.ReactNode> = {
                    'dj-only': <Music size={24} />,
                    'photo-booth-only': <Camera size={24} />,
                    bundle: <Package size={24} />,
                  };
                  return (
                    <OptionCard
                      key={key}
                      selected={inputs.offsitePackage === key}
                      onClick={() => setInputs((p) => ({ ...p, offsitePackage: key }))}
                      icon={icons[key]}
                      title={pkg.label}
                      description={pkg.description}
                      price={`$${pkg.base}`}
                      badge={key === 'bundle' ? 'Save $400' : undefined}
                    />
                  );
                })}
              </div>
            </section>
          )}

          {inputs.serviceType === 'host-here' && (
            <section className="neon-card p-6">
              <h3 className="font-display text-xl font-black text-vice-ink mb-2">
                Entertainment Add-Ons
              </h3>
              <p className="text-vice-muted text-sm mb-5">Add DJ and/or Photo Booth to your venue rental</p>

              <div className="space-y-3">
                {(Object.keys(venueAddOnDetails) as VenueAddOn[]).map((key) => {
                  const detail = venueAddOnDetails[key];
                  return (
                    <ToggleCard
                      key={key}
                      checked={inputs.venueAddOns[key]}
                      onChange={(v) =>
                        setInputs((p) => ({
                          ...p,
                          venueAddOns: { ...p.venueAddOns, [key]: v },
                        }))
                      }
                      label={detail.label}
                      description={detail.description}
                      price={`+$${detail.price}`}
                    />
                  );
                })}
              </div>

              {inputs.venueAddOns.dj && inputs.venueAddOns.photoBooth && (
                <div className="mt-4 p-3 rounded-xl bg-vice-gold/10 border border-vice-gold/30 text-center">
                  <span className="text-sm font-bold text-vice-ink">
                    DJ + Photo Booth bundle discount: save $400
                  </span>
                </div>
              )}
            </section>
          )}

          <section className="neon-card p-6">
            <h3 className="font-display text-xl font-black text-vice-ink mb-2">
              Extras
            </h3>
            <p className="text-vice-muted text-sm mb-5">Customize your event experience</p>

            <div className="space-y-3">
              <ToggleCard
                checked={inputs.catering}
                onChange={(v) => setInputs((p) => ({ ...p, catering: v, cateringOption: v ? p.cateringOption : null }))}
                label="Catering"
                description="Food service for your guests"
                price="from $15/person"
              >
                <div className="space-y-2 mt-2 border-t border-vice-ink/10 pt-3">
                  <p className="text-xs text-vice-muted font-semibold uppercase tracking-wide mb-2">Select an option:</p>
                  {(Object.keys(cateringOptions) as CateringOption[]).map((key) => {
                    const opt = cateringOptions[key];
                    return (
                      <SubOption
                        key={key}
                        selected={inputs.cateringOption === key}
                        onClick={() => setInputs((p) => ({ ...p, cateringOption: key }))}
                        label={opt.label}
                        price={`$${opt.pricePerPerson * inputs.guestCount} ($${opt.pricePerPerson}/person)`}
                        description={opt.description}
                      />
                    );
                  })}
                </div>
              </ToggleCard>

              <ToggleCard
                checked={inputs.bartender}
                onChange={(v) => setInputs((p) => ({ ...p, bartender: v }))}
                label="Bartender"
                description="Professional bartender service"
                price={`$${BARTENDER_PRICE_PER_PERSON * inputs.guestCount} ($${BARTENDER_PRICE_PER_PERSON}/person)`}
              />

              <ToggleCard
                checked={inputs.balloons}
                onChange={(v) => setInputs((p) => ({ ...p, balloons: v, balloonSize: v ? p.balloonSize : null }))}
                label="Balloon Decor"
                description="Custom balloon arrangements"
                price="from $250"
              >
                <div className="space-y-2 mt-2 border-t border-vice-ink/10 pt-3">
                  <p className="text-xs text-vice-muted font-semibold uppercase tracking-wide mb-2">Select a size:</p>
                  {(Object.keys(balloonSizes) as BalloonSize[]).map((key) => {
                    const size = balloonSizes[key];
                    return (
                      <SubOption
                        key={key}
                        selected={inputs.balloonSize === key}
                        onClick={() => setInputs((p) => ({ ...p, balloonSize: key }))}
                        label={size.label}
                        price={`$${size.price}`}
                        description={size.description}
                      />
                    );
                  })}
                </div>
              </ToggleCard>
            </div>
          </section>
        </div>

        <div className="hidden lg:block lg:col-span-2">
          <StickyEstimatePanel result={result} isReady={isReady} />
        </div>
      </div>

      <MobileEstimateBar result={result} isReady={isReady} />
    </div>
  );
}
