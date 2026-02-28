import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      <section className="bg-vice-night text-white px-4 py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-black mb-4">Offsite DJ + Photo Booth Services</h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">Two vendors, one booking, one setup plan for backyards, pool parties, and milestone nights.</p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="neon-card p-6"><h2 className="text-2xl font-black mb-2">DJ Only</h2><p className="text-3xl font-black text-vice-pink mb-2">$700</p><p>3 hours included. Pro DJ set built for mixed ages.</p></div>
          <div className="neon-card p-6"><h2 className="text-2xl font-black mb-2">Photo Booth Only</h2><p className="text-3xl font-black text-vice-pink mb-2">$600</p><p>3 hours included. DSLR booth, prints, attendant, and digital gallery.</p></div>
          <div className="neon-card p-6"><p className="glow-plate glow-plate-gold inline-block text-xs mb-2">MOST POPULAR</p><h2 className="text-2xl font-black mb-2">DJ + Booth Bundle</h2><p className="text-3xl font-black text-vice-pink mb-2">$900</p><p>3 hours included. Extra hour is $150/hr.</p></div>
        </div>
        <div className="text-center mt-10"><Link href="/book" className="glow-plate glow-plate-gold px-8 py-4 rounded-xl font-bold">Check Availability</Link></div>
      </section>
    </>
  );
}
