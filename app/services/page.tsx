import Link from 'next/link';
import { services } from '@/config/services';
import { djs } from '@/config/content';

export default function ServicesPage() {
  return (
    <div className="py-14 px-4 space-y-12">
      <section className="max-w-6xl mx-auto">
        <h1 className="font-display text-5xl font-black text-vice-ink mb-4">Offsite Services</h1>
        <p className="text-xl text-vice-muted">We come to your home, backyard, rental, or private event space.</p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="neon-card p-6">
          <h2 className="font-display text-3xl font-black text-vice-ink mb-3">DJ</h2>
          <p className="text-vice-muted mb-4">Built for birthdays, pool parties, and milestone nights (not ballroom wedding scripting).</p>
          <ul className="space-y-2 text-sm text-vice-ink">{services.djOnly.features.map((f) => <li key={f}>• {f}</li>)}</ul>
        </div>
        <div className="neon-card p-6">
          <h2 className="font-display text-3xl font-black text-vice-ink mb-3">DSLR Photo Booth</h2>
          <p className="text-vice-muted mb-4">DSLR quality + flattering light + custom template every event.</p>
          <ul className="space-y-2 text-sm text-vice-ink">{services.photoBoothOnly.features.map((f) => <li key={f}>• {f}</li>)}</ul>
        </div>
      </section>

      <section className="bg-vice-night star-speckle py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-4xl font-black text-white mb-6">Fam Jam Collective</h2>
          <div className="grid md:grid-cols-3 gap-4">{djs.map((dj) => <div key={dj.id} className="neon-card-dark p-5"><h3 className="text-white font-bold">{dj.name}</h3><p className="text-vice-cyan text-sm">{dj.specialty}</p><div className="text-white/80 text-sm mt-3">IG / TikTok / YouTube</div></div>)}</div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto neon-card p-6">
        <h3 className="font-display text-3xl font-black text-vice-ink mb-3">Pricing</h3>
        <p className="text-lg">DJ Only $700 • Photo Booth Only $600 • Bundle $900 (Most Popular) • Extra hours $150/hr</p>
        <Link href="/book" className="glow-plate glow-plate-gold neon-hover px-6 py-3 rounded-xl font-bold inline-block mt-5">Book Now</Link>
      </section>
    </div>
  );
}
