export interface CalculatorConfig {
  basePrice: number;
  perGuestCost: number;
  weekendMultiplier: number;
  addOns: Record<string, number>;
}

export const venueCalculatorConfig: CalculatorConfig = {
  basePrice: 1200,
  perGuestCost: 25,
  weekendMultiplier: 1.3,
  addOns: {
    planning: 500,
    cateringCoordination: 300,
    dj: 700,
    photoBooth: 600,
  },
};

export interface CalculatorInputs {
  isWeekend: boolean;
  guestCount: number;
  durationHours: number;
  addOns: Record<string, boolean>;
}

export interface CalculatorOutput {
  minimum: number;
  maximum: number;
  breakdown: {
    base: number;
    perGuest: number;
    weekend: number;
    addOns: number;
  };
}

export function calculateVenuePrice(inputs: CalculatorInputs): CalculatorOutput {
  const config = venueCalculatorConfig;

  let base = config.basePrice;

  const perGuestCost = config.perGuestCost * inputs.guestCount;

  if (inputs.isWeekend) {
    base *= config.weekendMultiplier;
  }

  let addOnsTotal = 0;
  Object.entries(inputs.addOns).forEach(([key, included]) => {
    if (included && config.addOns[key]) {
      addOnsTotal += config.addOns[key];
    }
  });

  const subtotal = base + perGuestCost + addOnsTotal;
  const minimum = Math.round(subtotal * 0.95);
  const maximum = Math.round(subtotal * 1.15);

  return {
    minimum,
    maximum,
    breakdown: {
      base: Math.round(base),
      perGuest: Math.round(perGuestCost),
      weekend: inputs.isWeekend ? Math.round(base * (config.weekendMultiplier - 1)) : 0,
      addOns: Math.round(addOnsTotal),
    },
  };
}
