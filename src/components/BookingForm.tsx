'use client';

import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { NeonButton } from '@/components/NeonButton';
import { NeonCard } from '@/components/NeonCard';
import { services, Service } from '@/config/services';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface BookingFormProps {
  initialService?: string;
}

type StepKey = 'service' | 'availability' | 'details' | 'contact' | 'confirmation';

const steps: { key: StepKey; label: string }[] = [
  { key: 'service', label: 'Choose Service' },
  { key: 'availability', label: 'Check Availability' },
  { key: 'details', label: 'Event Details' },
  { key: 'contact', label: 'Your Info' },
  { key: 'confirmation', label: 'Confirm' },
];

export const BookingForm: React.FC<BookingFormProps> = ({ initialService }) => {
  const [currentStep, setCurrentStep] = useState<StepKey>('service');
  const [selectedService, setSelectedService] = useState<Service | null>(
    initialService ? services[initialService] || null : null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    eventDate: '',
    timeWindow: '',
    guestCount: '',
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const currentStepIndex = steps.findIndex((s) => s.key === currentStep);

  const handleNext = () => {
    const currentIndex = steps.findIndex((s) => s.key === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].key);
    }
  };

  const handlePrevious = () => {
    const currentIndex = steps.findIndex((s) => s.key === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].key);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService?.id,
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <NeonCard variant="light" className="max-w-2xl mx-auto text-center">
        <div className="py-8">
          <div className="w-20 h-20 bg-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={48} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Request Received!</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Thank you for your interest! We&apos;ll review your request and contact you within 24 hours
            to confirm availability and discuss details.
          </p>
          <NeonButton variant="primary" asLink href="/">
            Return Home
          </NeonButton>
        </div>
      </NeonCard>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, idx) => (
            <div key={step.key} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  idx <= currentStepIndex
                    ? 'bg-neon-magenta text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {idx + 1}
              </div>
              {idx < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    idx < currentStepIndex ? 'bg-neon-magenta' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Step {currentStepIndex + 1} of {steps.length}: {steps[currentStepIndex].label}
          </p>
        </div>
      </div>

      <NeonCard variant="light">
        {currentStep === 'service' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Select Your Service</h2>
            <RadioGroup
              value={selectedService?.id}
              onValueChange={(value) => {
                const service = Object.values(services).find((s) => s.id === value);
                setSelectedService(service || null);
              }}
            >
              {Object.values(services).map((service) => (
                <div
                  key={service.id}
                  className="flex items-start space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-neon-cyan transition-all cursor-pointer"
                >
                  <RadioGroupItem value={service.id} id={service.id} />
                  <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                    <div className="font-bold text-lg text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-700 mt-1">{service.description}</div>
                    {service.price && (
                      <div className="text-neon-magenta font-bold mt-2">${service.price}</div>
                    )}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-end">
              <NeonButton variant="primary" onClick={handleNext} disabled={!selectedService}>
                Next
                <ArrowRight className="ml-2 inline" size={20} />
              </NeonButton>
            </div>
          </div>
        )}

        {currentStep === 'availability' && selectedService && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Check Availability</h2>
            <p className="text-gray-700">
              Visit our calendar to check availability for {selectedService.name}
            </p>
            {selectedService.availabilityUrl && (
              <a
                href={selectedService.availabilityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-4 px-6 bg-neon-cyan text-black font-bold rounded-lg hover:bg-neon-cyan/80 transition-all"
              >
                View Availability Calendar
              </a>
            )}
            <div className="flex justify-between">
              <NeonButton variant="secondary" onClick={handlePrevious}>
                <ArrowLeft className="mr-2 inline" size={20} />
                Back
              </NeonButton>
              <NeonButton variant="primary" onClick={handleNext}>
                Continue
                <ArrowRight className="ml-2 inline" size={20} />
              </NeonButton>
            </div>
          </div>
        )}

        {currentStep === 'details' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="timeWindow">Time Window</Label>
                <Input
                  id="timeWindow"
                  placeholder="e.g., 2pm - 5pm"
                  value={formData.timeWindow}
                  onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="guestCount">Approximate Guest Count</Label>
                <Input
                  id="guestCount"
                  type="number"
                  placeholder="e.g., 40"
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about your event..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={4}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <NeonButton variant="secondary" onClick={handlePrevious}>
                <ArrowLeft className="mr-2 inline" size={20} />
                Back
              </NeonButton>
              <NeonButton variant="primary" onClick={handleNext}>
                Next
                <ArrowRight className="ml-2 inline" size={20} />
              </NeonButton>
            </div>
          </div>
        )}

        {currentStep === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Contact Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <NeonButton variant="secondary" onClick={handlePrevious}>
                <ArrowLeft className="mr-2 inline" size={20} />
                Back
              </NeonButton>
              <NeonButton variant="primary" onClick={handleNext}>
                Review
                <ArrowRight className="ml-2 inline" size={20} />
              </NeonButton>
            </div>
          </div>
        )}

        {currentStep === 'confirmation' && selectedService && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Review Your Booking</h2>
            <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
              <div>
                <div className="text-sm text-gray-600">Service</div>
                <div className="font-bold text-gray-900">{selectedService.name}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Event Date</div>
                <div className="font-bold text-gray-900">{formData.eventDate}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Time</div>
                <div className="font-bold text-gray-900">{formData.timeWindow}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Guests</div>
                <div className="font-bold text-gray-900">{formData.guestCount}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Contact</div>
                <div className="font-bold text-gray-900">{formData.name}</div>
                <div className="text-sm text-gray-700">{formData.email}</div>
                <div className="text-sm text-gray-700">{formData.phone}</div>
              </div>
            </div>
            <div className="flex justify-between">
              <NeonButton variant="secondary" onClick={handlePrevious}>
                <ArrowLeft className="mr-2 inline" size={20} />
                Back
              </NeonButton>
              <NeonButton
                variant="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
                <Check className="ml-2 inline" size={20} />
              </NeonButton>
            </div>
          </div>
        )}
      </NeonCard>
    </div>
  );
};
