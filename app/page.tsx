import Link from 'next/link';
import { Camera, Music, Sparkles } from 'lucide-react';
import { djs, taglines } from '@/config/content';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-vice-cyan rounded-full blur-3xl animate-neon-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-vice-pink rounded-full blur-3xl animate-neon-pulse delay-1000" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-black text-vice-ink mb-6">{taglines.main}</h1>
          <p className="text-xl md:text-2xl text-vice-muted mb-4 max-w-4xl mx-auto">{taglines.supporting}</p>
          <p className="text-lg font-semibold text-vice-ink/80 mb-10">{taglines.supportLine}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="glow-plate glow-plate-gold neon-hover px-8 py-4 rounded-xl text-lg font-bold">Book Now</Link>
            <a href="tel:3124149698" className="glow-plate glow-plate-pink neon-hover px-8 py-4 rounded-xl text-lg font-bold">Text 312-414-9698</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto neon-card p-8 md:p-10">
          <h2 className="font-display text-4xl font-black text-vice-ink mb-2">DJ + DSLR Photo Booth Bundle</h2>
          <p className="text-vice-muted text-lg mb-4">Two vendors. One booking. One setup plan.</p>
          <p className="text-xl font-bold text-vice-pink mb-6">DJ $700 / Booth $600 / Bundle $900 (Most Popular)</p>
          <Link href="/pricing" className="glow-plate glow-plate-gold neon-hover px-6 py-3 rounded-xl font-bold inline-block">Build Your Estimate</Link>
        </div>
      </section>

      <section className="bg-vice-night star-speckle py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white text-glow-pink mb-4 text-center">Fam Jam Collective</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-center mb-10">{taglines.collective}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {djs.map((dj, idx) => (
              <div key={dj.id} className="neon-card-dark p-6 text-center">
                <div className="glow-plate glow-plate-cyan w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4">
                  {idx === 1 ? <Sparkles size={24} /> : idx === 2 ? <Camera size={24} /> : <Music size={24} />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{dj.name}</h3>
                <p className="text-vice-cyan text-sm font-semibold mb-2">{dj.specialty}</p>
                <p className="text-white/70 text-sm">{dj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
