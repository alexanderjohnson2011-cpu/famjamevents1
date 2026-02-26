'use client';

import React, { useMemo, useState } from 'react';
import { Check } from 'lucide-react';
import { servicesList } from '@/config/services';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface EstimatePrefill {
  serviceType?: string;
  hours?: string;
  basePrice?: string;
  extraHours?: string;
  totalPrice?: string;
  pageSource?: string;
}

interface BookingFormProps {
  initialEstimate?: EstimatePrefill;
}

const vibeOptions = ['Top 40', 'Throwbacks', 'Hip-hop', 'Latin', 'Afrobeats', 'House', 'Family-friendly mix'];

export function BookingForm({ initialEstimate }: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    serviceType: initialEstimate?.serviceType || 'bundle',
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    startTime: '',
    address: '',
    guestCount: '',
    ageMix: '',
    celebrationType: '',
    notes: '',
    musicVibe: [] as string[],
    mustPlay: '',
    doNotPlay: '',
    micNeeded: 'no',
    printSize: '2x6',
    templateTheme: '',
    namesDateText: '',
    digitalGallery: 'yes',
  });

  const showDjFields = form.serviceType === 'dj-only' || form.serviceType === 'bundle';
  const showBoothFields = form.serviceType === 'photo-booth-only' || form.serviceType === 'bundle';

  const estimateSummary = useMemo(() => {
    if (!initialEstimate?.totalPrice) return null;
    return {
      serviceType: initialEstimate.serviceType,
      hours: Number(initialEstimate.hours || 3),
      extraHours: Number(initialEstimate.extraHours || 0),
      basePrice: Number(initialEstimate.basePrice || 0),
      totalPrice: Number(initialEstimate.totalPrice || 0),
    };
  }, [initialEstimate]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        contact: {
          name: form.name,
          phone: form.phone,
          email: form.email,
        },
        questionnaire: {
          eventDate: form.eventDate,
          startTime: form.startTime,
          address: form.address,
          guestCount: form.guestCount,
          ageMix: form.ageMix,
          celebrationType: form.celebrationType,
          notes: form.notes,
          dj: showDjFields
            ? { musicVibe: form.musicVibe, mustPlay: form.mustPlay, doNotPlay: form.doNotPlay, micNeeded: form.micNeeded }
            : undefined,
          booth: showBoothFields
            ? {
                printSize: form.printSize,
                templateTheme: form.templateTheme,
                namesDateText: form.namesDateText,
                digitalGallery: form.digitalGallery,
              }
            : undefined,
        },
        pricingEstimate: estimateSummary,
        serviceType: form.serviceType,
        pageSource: estimateSummary ? ['pricing', 'book'] : ['book'],
      };

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="neon-card p-8 text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 mx-auto rounded-full bg-vice-cyan/20 border border-vice-cyan/50 flex items-center justify-center mb-5">
          <Check className="text-vice-cyan" size={36} />
        </div>
        <h2 className="font-display text-3xl font-black text-vice-ink mb-3">Request Received</h2>
        <p className="text-vice-muted mb-6">We’ll confirm by text within 24 hours.</p>
        <a href="tel:3124149698" className="glow-plate glow-plate-pink neon-hover px-6 py-3 rounded-xl font-bold inline-block">Text 312-414-9698</a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-4xl mx-auto neon-card p-6 space-y-6">
      {estimateSummary && (
        <div className="bg-vice-night star-speckle rounded-xl p-5 text-white">
          <h3 className="font-bold text-lg mb-2">Your estimate</h3>
          <p className="text-white/80 text-sm">{estimateSummary.serviceType} • {estimateSummary.hours} hours • Extra {estimateSummary.extraHours} hours</p>
          <p className="text-2xl font-black text-glow-gold mt-2">${estimateSummary.totalPrice.toLocaleString()}</p>
        </div>
      )}

      <div>
        <Label>Service</Label>
        <select className="w-full mt-2 rounded-md border p-2" value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}>
          {servicesList.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
        </select>
      </div>

      <p className="text-sm text-vice-muted">Availability placeholder: We confirm real availability by text after reviewing your request.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {['name', 'phone', 'email', 'eventDate', 'startTime', 'address', 'guestCount', 'ageMix', 'celebrationType'].map((field) => (
          <div key={field}>
            <Label className="capitalize">{field.replace(/([A-Z])/g, ' $1')}</Label>
            <Input
              type={field === 'email' ? 'email' : field === 'eventDate' ? 'date' : field === 'guestCount' ? 'number' : 'text'}
              value={(form as any)[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required={['name', 'phone', 'email'].includes(field)}
            />
          </div>
        ))}
      </div>

      {showDjFields && (
        <div className="space-y-3 border-t pt-4">
          <h3 className="font-bold text-vice-ink">DJ Questionnaire</h3>
          <div>
            <Label>Music vibe (multi-select)</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {vibeOptions.map((vibe) => (
                <button type="button" key={vibe} onClick={() => setForm((p) => ({ ...p, musicVibe: p.musicVibe.includes(vibe) ? p.musicVibe.filter((v) => v !== vibe) : [...p.musicVibe, vibe] }))} className={`px-3 py-1 rounded-full border ${form.musicVibe.includes(vibe) ? 'bg-vice-cyan/20 border-vice-cyan' : 'border-vice-ink/20'}`}>
                  {vibe}
                </button>
              ))}
            </div>
          </div>
          <Input placeholder="Must-play songs/artists" value={form.mustPlay} onChange={(e) => setForm({ ...form, mustPlay: e.target.value })} />
          <Input placeholder="Do-not-play songs/artists" value={form.doNotPlay} onChange={(e) => setForm({ ...form, doNotPlay: e.target.value })} />
          <div>
            <Label>Mic needed?</Label>
            <select className="w-full mt-2 rounded-md border p-2" value={form.micNeeded} onChange={(e) => setForm({ ...form, micNeeded: e.target.value })}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      )}

      {showBoothFields && (
        <div className="space-y-3 border-t pt-4">
          <h3 className="font-bold text-vice-ink">Photo Booth Questionnaire</h3>
          <div>
            <Label>Print size</Label>
            <select className="w-full mt-2 rounded-md border p-2" value={form.printSize} onChange={(e) => setForm({ ...form, printSize: e.target.value })}>
              <option value="2x6">2x6</option>
              <option value="4x6">4x6</option>
            </select>
          </div>
          <Input placeholder="Template theme keywords" value={form.templateTheme} onChange={(e) => setForm({ ...form, templateTheme: e.target.value })} />
          <Input placeholder="Names/date text" value={form.namesDateText} onChange={(e) => setForm({ ...form, namesDateText: e.target.value })} />
          <div>
            <Label>Digital gallery?</Label>
            <select className="w-full mt-2 rounded-md border p-2" value={form.digitalGallery} onChange={(e) => setForm({ ...form, digitalGallery: e.target.value })}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      )}

      <div>
        <Label>Notes</Label>
        <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
      </div>

      <button type="submit" disabled={isSubmitting} className="glow-plate glow-plate-gold neon-hover px-8 py-3 rounded-xl font-bold">
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </button>
    </form>
  );
}
