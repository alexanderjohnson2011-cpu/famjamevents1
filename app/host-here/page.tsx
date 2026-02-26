import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { NeonButton } from '@/components/NeonButton';
import { AccentSection } from '@/components/AccentSection';
import { GalleryCarousel } from '@/components/GalleryCarousel';
import { VenueCalculator } from '@/components/VenueCalculator';
import { venueFacts, hostHereFaqs } from '@/config/content';
import { services } from '@/config/services';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HostHerePage() {
  const venueImages = [
    { alt: 'Pool view', label: 'Resort Pool' },
    { alt: 'Patio area', label: 'Covered Patio' },
    { alt: 'Event setup', label: 'Event Setup' },
    { alt: 'Night ambiance', label: 'Evening Ambiance' },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-day overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-neon-gold rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-cyan rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Host Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {services.hostHere.description}
          </p>
          <NeonButton variant="primary" size="lg" asLink href="/book">
            Check Availability
            <ArrowRight className="ml-2 inline" size={20} />
          </NeonButton>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-12">
            The Venue
          </h2>
          <GalleryCarousel items={venueImages} className="mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {venueFacts.map((fact, idx) => (
              <div key={idx} className="text-center">
                <div className="text-neon-magenta font-bold text-lg mb-1">{fact.label}</div>
                <div className="text-gray-700 text-sm">{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AccentSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.hostHere.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="text-neon-cyan flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-200 text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </AccentSection>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-12">
            Pricing Calculator
          </h2>
          <VenueCalculator />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {hostHereFaqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-neon-cyan rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:text-neon-magenta">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <AccentSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Host Your Event?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Check our availability and start planning your celebration today.
          </p>
          <NeonButton variant="primary" size="lg" asLink href="/book">
            Book Now
            <ArrowRight className="ml-2 inline" size={20} />
          </NeonButton>
        </div>
      </AccentSection>
    </>
  );
}
