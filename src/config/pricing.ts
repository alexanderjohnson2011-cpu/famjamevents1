export type OffsitePackage = 'dj-only' | 'photo-booth-only' | 'bundle';

export interface PricingInputs {
  offsitePackage: OffsitePackage;
  durationHours: number;
}

export const BASE_DURATION_HOURS = 3;
export const EXTRA_HOUR_RATE_OFFSITE = 150;

export const offsitePackages: Record<OffsitePackage, { label: string; base: number; description: string; badge?: string }> = {
  'dj-only': { label: 'DJ Only', base: 700, description: '3-hour DJ set with pro sound and crowd-aware mixing' },
  'photo-booth-only': { label: 'Photo Booth Only', base: 600, description: '3-hour DSLR booth with flattering light + custom template' },
  bundle: { label: 'DJ + Photo Booth Bundle', base: 900, description: 'Two vendors. One booking. One setup plan.', badge: 'Most Popular' },
};

export const defaultPricingInputs: PricingInputs = {
  offsitePackage: 'bundle',
  durationHours: BASE_DURATION_HOURS,
};

export interface PricingResult {
  basePrice: number;
  extraHours: number;
  totalPrice: number;
  lineItems: { label: string; amount: number }[];
  savings?: number;
}

export function calculateEstimate(inputs: PricingInputs): PricingResult {
  const pkg = offsitePackages[inputs.offsitePackage];
  const extraHours = Math.max(0, inputs.durationHours - BASE_DURATION_HOURS);
  const extraHoursCost = extraHours * EXTRA_HOUR_RATE_OFFSITE;
  const lineItems = [
    { label: `${pkg.label} (${BASE_DURATION_HOURS} hours included)`, amount: pkg.base },
  ];

  if (extraHours > 0) {
    lineItems.push({ label: `Extra hours (${extraHours} x $${EXTRA_HOUR_RATE_OFFSITE})`, amount: extraHoursCost });
  }

  const savings =
    inputs.offsitePackage === 'bundle'
      ? offsitePackages['dj-only'].base + offsitePackages['photo-booth-only'].base - pkg.base
      : undefined;

  return {
    basePrice: pkg.base,
    extraHours,
    totalPrice: pkg.base + extraHoursCost,
    lineItems,
    savings,
  };
}
