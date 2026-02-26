import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NeonButton } from '@/components/NeonButton';
import { AccentSection } from '@/components/AccentSection';
import { PricingTable } from '@/components/PricingTable';
import { offsiteFaqs, printTemplates } from '@/config/content';
import { services } from '@/config/services';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function WeComeToYouPage() {
  const pricingTiers = [
    {
      name: 'DJ Only',
      price: services.djOnly.price!,
      duration: services.djOnly.duration!,
      features: services.djOnly.features,
      ctaLabel: 'Book DJ',
      ctaHref: '/book?service=dj-only',
    },
    {
      name: 'DJ + Photo Booth',
      price: services.bundle.price!,
      duration: services.bundle.duration!,
      features: services.bundle.features,
      bestValue: true,
      ctaLabel: 'Book Bundle',
      ctaHref: '/book?service=dj-photo-booth-bundle',
    },
    {
      name: 'Photo Booth Only',
      price: services.photoBoothOnly.price!,
      duration: services.photoBoothOnly.duration!,
      features: services.photoBoothOnly.features,
      ctaLabel: 'Book Photo Booth',
      ctaHref: '/book?service=photo-booth-only',
    },
  ];

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-day overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-neon-magenta rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            We Come To You
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional DJ + DSLR Photo Booth services for your venue. Two vendors, one booking,
            seamless coordination.
          </p>
          <NeonButton variant="primary" size="lg" asLink href="/book">
            Book Your Services
            <ArrowRight className="ml-2 inline" size={20} />
          </NeonButton>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select the perfect combination of services for your event. All packages include 3
            hours of professional service.
          </p>
          <PricingTable tiers={pricingTiers} />
        </div>
      </section>

      <AccentSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
            The DJ Experience
          </h2>
          <p className="text-xl text-gray-200 mb-12 text-center max-w-3xl mx-auto">
            Our collective brings versatile styles and seamless vibe curation to every event
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neon-card-dark">
              <h3 className="text-2xl font-bold mb-4">What We Bring</h3>
              <ul className="space-y-3">
                {services.djOnly.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-neon-cyan mr-3 font-bold">✓</span>
                    <span className="text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="neon-card-dark">
              <h3 className="text-2xl font-bold mb-4">Your Input Matters</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="text-neon-magenta mr-3 font-bold">→</span>
                  <span>Tell us your must-play songs and absolute no-goes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta mr-3 font-bold">→</span>
                  <span>Share your event vibe and guest demographics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta mr-3 font-bold">→</span>
                  <span>Let us know timing preferences and special moments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-neon-magenta mr-3 font-bold">→</span>
                  <span>We handle the rest with professional curation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AccentSection>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-6">
            The Photo Booth Experience
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Professional DSLR quality with custom print designs and flattering lighting
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="neon-card">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">What's Included</h3>
              <ul className="space-y-3">
                {services.photoBoothOnly.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-neon-cyan mr-3 font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="neon-card">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Print Templates</h3>
              <p className="text-gray-700 mb-4">
                Choose from our curated templates or work with us to create something custom
              </p>
              <div className="space-y-2">
                {printTemplates.map((template) => (
                  <div key={template.id} className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-magenta rounded-full" />
                    <div>
                      <div className="font-semibold text-gray-900">{template.title}</div>
                      <div className="text-sm text-gray-600">{template.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {offsiteFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-neon-magenta rounded-lg px-6 bg-white"
              >
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
            Ready to Book?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Check availability and customize your service package for your event.
          </p>
          <NeonButton variant="primary" size="lg" asLink href="/book">
            Get Started
            <ArrowRight className="ml-2 inline" size={20} />
          </NeonButton>
        </div>
      </AccentSection>
    </>
  );
}
