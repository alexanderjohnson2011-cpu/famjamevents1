import Link from 'next/link';
import PricingEstimator from '@/components/PricingEstimator';

export default function PricingPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-vice-gold rounded-full blur-3xl animate-neon-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-vice-cyan rounded-full blur-3xl animate-neon-pulse delay-1000" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-black text-vice-ink mb-4">Offsite Pricing Estimator</h1>
          <p className="text-xl md:text-2xl text-vice-muted">DJ + DSLR Photo Booth only for offsite events.</p>
        </div>
      </section>

      <section className="py-8 md:py-12 px-4 pb-24 lg:pb-12">
        <PricingEstimator />
      </section>

      <section className="bg-vice-night star-speckle py-20 px-4 text-center">
        <Link href="/book" className="glow-plate glow-plate-gold neon-hover px-10 py-5 rounded-xl text-xl font-bold inline-block">Book Now</Link>
      </section>
    </>
  );
}
