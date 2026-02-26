'use client';

import React, { useState } from 'react';
import { NeonCard } from './NeonCard';
import { calculateVenuePrice, CalculatorInputs } from '@/config/calculator';

export const VenueCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    isWeekend: false,
    guestCount: 30,
    durationHours: 4,
    addOns: {
      planning: false,
      cateringCoordination: false,
      dj: false,
      photoBooth: false,
    },
  });

  const result = calculateVenuePrice(inputs);

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddOnChange = (addOn: string, value: boolean) => {
    setInputs((prev) => ({
      ...prev,
      addOns: { ...prev.addOns, [addOn]: value },
    }));
  };

  return (
    <NeonCard variant="light" className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Estimate Your Event Cost</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Number of Guests
          </label>
          <input
            type="range"
            min="10"
            max="60"
            value={inputs.guestCount}
            onChange={(e) => handleInputChange('guestCount', parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center text-lg font-bold text-neon-magenta mt-2">
            {inputs.guestCount} guests
          </div>
        </div>

        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.isWeekend}
              onChange={(e) => handleInputChange('isWeekend', e.target.checked)}
              className="w-5 h-5"
            />
            <span className="text-sm font-semibold text-gray-700">
              Weekend Event (Friday-Sunday)
            </span>
          </label>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">Add-Ons</h4>
          <div className="space-y-2">
            {Object.keys(inputs.addOns).map((addOn) => (
              <label key={addOn} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inputs.addOns[addOn as keyof typeof inputs.addOns]}
                  onChange={(e) => handleAddOnChange(addOn, e.target.checked)}
                  className="w-5 h-5"
                />
                <span className="text-sm text-gray-700 capitalize">
                  {addOn.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-neon-cyan pt-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Estimated Total</p>
            <p className="text-4xl font-black text-neon-magenta mb-2">
              ${result.minimum.toLocaleString()} - ${result.maximum.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">
              Final pricing determined after consultation
            </p>
          </div>
        </div>
      </div>
    </NeonCard>
  );
};
