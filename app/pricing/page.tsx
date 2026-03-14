import Link from 'next/link';

export default function PricingPage() {
  return (
    <section className="py-20 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-display text-5xl md:text-6xl font-black mb-4">Simple Offsite Pricing</h1>
        <p className="text-vice-muted text-lg mb-10">All packages include 3 hours. Extra hour: $150/hr.</p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="neon-card p-6"><h2 className="text-2xl font-black">DJ Only</h2><p className="text-3xl font-black text-vice-pink mt-2">$700</p></div>
          <div className="neon-card p-6"><h2 className="text-2xl font-black">Photo Booth Only</h2><p className="text-3xl font-black text-vice-pink mt-2">$600</p></div>
          <div className="neon-card p-6"><h2 className="text-2xl font-black">DJ + Photo Booth</h2><p className="text-3xl font-black text-vice-pink mt-2">$900</p><p className="text-sm mt-2 text-vice-muted">Most popular</p></div>
        </div>
        <Link href="/book" className="inline-block mt-10 glow-plate glow-plate-gold px-8 py-4 rounded-xl font-bold">Book Now</Link>
      </div>
    </section>
  );
}
