export type ServiceType = 'host-here' | 'we-come-to-you';

export type OffsitePackage = 'dj-only' | 'photo-booth-only' | 'bundle';
export type VenueAddOn = 'dj' | 'photoBooth';
export type CateringOption = 'grazing-table' | 'finger-foods' | 'full-buffet' | 'kid-friendly';
export type BalloonSize = 'small' | 'medium' | 'large';

export interface PricingInputs {
  serviceType: ServiceType | null;
  offsitePackage: OffsitePackage | null;
  guestCount: number;
  durationHours: number;
  venueAddOns: Record<VenueAddOn, boolean>;
  catering: boolean;
  cateringOption: CateringOption | null;
  bartender: boolean;
  balloons: boolean;
  balloonSize: BalloonSize | null;
}

export const defaultPricingInputs: PricingInputs = {
  serviceType: null,
  offsitePackage: null,
  guestCount: 20,
  durationHours: 3,
  venueAddOns: {
    dj: false,
    photoBooth: false,
  },
  catering: false,
  cateringOption: null,
  bartender: false,
  balloons: false,
  balloonSize: null,
};

export const offsitePackages = {
  'dj-only': { label: 'DJ Only', base: 700, description: 'Professional DJ with premium equipment' },
  'photo-booth-only': { label: 'Photo Booth Only', base: 600, description: 'DSLR Photo Booth with custom prints' },
  'bundle': { label: 'DJ + Photo Booth Bundle', base: 900, description: 'Best value -- both services, one booking' },
} as const;

export const venueAddOnDetails: Record<VenueAddOn, { label: string; price: number; description: string }> = {
  dj: { label: 'DJ Service', price: 700, description: 'Live DJ with pro sound system' },
  photoBooth: { label: 'Photo Booth', price: 600, description: 'DSLR booth with custom prints' },
};

export const cateringOptions: Record<CateringOption, { label: string; pricePerPerson: number; description: string }> = {
  'grazing-table': { label: 'Grazing Table', pricePerPerson: 15, description: 'Artisan cheese, charcuterie & seasonal bites' },
  'finger-foods': { label: 'Finger Foods', pricePerPerson: 20, description: 'Assorted appetizers & hors d\'oeuvres' },
  'full-buffet': { label: 'Full Buffet', pricePerPerson: 25, description: 'Complete meal with multiple courses' },
  'kid-friendly': { label: 'Kid Friendly / Casual', pricePerPerson: 35, description: 'Crowd-pleasing favorites for all ages' },
};

export const balloonSizes: Record<BalloonSize, { label: string; price: number; description: string }> = {
  small: { label: 'Small', price: 250, description: 'Accent pieces & table arrangements' },
  medium: { label: 'Medium', price: 400, description: 'Balloon arch or backdrop' },
  large: { label: 'Large', price: 600, description: 'Full statement installation' },
};

export interface VenueTier {
  maxGuests: number;
  ratePerHour: number;
}

export const venueTiers: VenueTier[] = [
  { maxGuests: 10, ratePerHour: 85 },
  { maxGuests: 20, ratePerHour: 110 },
  { maxGuests: 30, ratePerHour: 120 },
  { maxGuests: 40, ratePerHour: 150 },
  { maxGuests: 50, ratePerHour: 180 },
  { maxGuests: 60, ratePerHour: 220 },
  { maxGuests: 70, ratePerHour: 260 },
  { maxGuests: 80, ratePerHour: 300 },
];

export const MAX_VENUE_GUESTS = 80;

export function getVenueHourlyRate(guestCount: number): number | null {
  if (guestCount <= 0 || guestCount > MAX_VENUE_GUESTS) {
    return null;
  }
  const tier = venueTiers.find((t) => guestCount <= t.maxGuests);
  return tier ? tier.ratePerHour : null;
}

export const BARTENDER_PRICE_PER_PERSON = 20;
export const EXTRA_HOUR_RATE_OFFSITE = 150;
export const BASE_DURATION_HOURS = 3;

export interface PricingResult {
  low: number;
  high: number;
  lineItems: { label: string; amount: number }[];
  savings?: number;
  requiresCustomQuote?: boolean;
}

export function calculateEstimate(inputs: PricingInputs): PricingResult | null {
  if (!inputs.serviceType) return null;

  const lineItems: { label: string; amount: number }[] = [];
  let total = 0;
  let savings = 0;

  if (inputs.serviceType === 'we-come-to-you') {
    if (!inputs.offsitePackage) return null;

    const pkg = offsitePackages[inputs.offsitePackage];
    lineItems.push({ label: pkg.label, amount: pkg.base });
    total += pkg.base;

    if (inputs.offsitePackage === 'bundle') {
      savings = offsitePackages['dj-only'].base + offsitePackages['photo-booth-only'].base - pkg.base;
    }

    const extraHours = Math.max(0, inputs.durationHours - BASE_DURATION_HOURS);
    if (extraHours > 0) {
      const extraCost = extraHours * EXTRA_HOUR_RATE_OFFSITE;
      lineItems.push({ label: `${extraHours} extra hour${extraHours > 1 ? 's' : ''}`, amount: extraCost });
      total += extraCost;
    }
  } else {
    if (inputs.guestCount > MAX_VENUE_GUESTS) {
      return { low: 0, high: 0, lineItems: [], requiresCustomQuote: true };
    }

    const hourlyRate = getVenueHourlyRate(inputs.guestCount);
    if (!hourlyRate) return null;

    const venueCost = hourlyRate * inputs.durationHours;
    lineItems.push({
      label: `Venue (${inputs.guestCount} guests) x ${inputs.durationHours} hrs @ $${hourlyRate}/hr`,
      amount: venueCost,
    });
    total = venueCost;

    (Object.keys(inputs.venueAddOns) as VenueAddOn[]).forEach((key) => {
      if (inputs.venueAddOns[key]) {
        const detail = venueAddOnDetails[key];
        lineItems.push({ label: detail.label, amount: detail.price });
        total += detail.price;
      }
    });

    if (inputs.venueAddOns.dj && inputs.venueAddOns.photoBooth) {
      savings = 400;
      lineItems.push({ label: 'DJ + Booth bundle discount', amount: -400 });
      total -= 400;
    }
  }

  if (inputs.catering && inputs.cateringOption) {
    const option = cateringOptions[inputs.cateringOption];
    const cateringCost = option.pricePerPerson * inputs.guestCount;
    lineItems.push({ label: `${option.label} (${inputs.guestCount} guests)`, amount: cateringCost });
    total += cateringCost;
  }

  if (inputs.bartender) {
    const bartenderCost = BARTENDER_PRICE_PER_PERSON * inputs.guestCount;
    lineItems.push({ label: `Bartender (${inputs.guestCount} guests)`, amount: bartenderCost });
    total += bartenderCost;
  }

  if (inputs.balloons && inputs.balloonSize) {
    const balloon = balloonSizes[inputs.balloonSize];
    lineItems.push({ label: `Balloons (${balloon.label})`, amount: balloon.price });
    total += balloon.price;
  }

  const low = Math.round(total * 0.95);
  const high = Math.round(total * 1.05);

  return { low, high, lineItems, savings: savings > 0 ? savings : undefined };
}
