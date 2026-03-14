export type OffsitePackage = 'dj-only' | 'photo-booth-only' | 'bundle';

export const offsitePackages = {
  'dj-only': { label: 'DJ Only', base: 700, description: 'Professional DJ with premium equipment' },
  'photo-booth-only': { label: 'Photo Booth Only', base: 600, description: 'DSLR Photo Booth with custom prints' },
  bundle: { label: 'DJ + Photo Booth Bundle', base: 900, description: 'Best value -- both services, one booking' },
} as const;

export const EXTRA_HOUR_RATE_OFFSITE = 150;
export const BASE_DURATION_HOURS = 3;

export interface PricingResult {
  total: number;
  low: number;
  high: number;
  savings?: number;
  requiresCustomQuote?: boolean;
  lineItems: { label: string; amount: number }[];
}

export function calculateOffsiteEstimate(pkg: OffsitePackage, durationHours: number): PricingResult {
  const lineItems: { label: string; amount: number }[] = [];
  const base = offsitePackages[pkg].base;
  lineItems.push({ label: offsitePackages[pkg].label, amount: base });

  const extraHours = Math.max(0, durationHours - BASE_DURATION_HOURS);
  if (extraHours > 0) {
    lineItems.push({ label: `Extra hour x${extraHours}`, amount: extraHours * EXTRA_HOUR_RATE_OFFSITE });
  }

  const total = lineItems.reduce((sum, item) => sum + item.amount, 0);
  return { total, low: Math.round(total * 0.95), high: Math.round(total * 1.05), lineItems };
}
