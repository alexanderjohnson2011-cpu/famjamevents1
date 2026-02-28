import Image from 'next/image';
import Link from 'next/link';
import { Camera, Music2 } from 'lucide-react';
import { djs } from '@/config/djs';

function Meter({ value }: { value: number }) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2 rounded-full ${idx < value ? 'bg-vice-cyan' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="bg-vice-night star-speckle text-[#F5F7FA] px-4 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-black mb-6 vice-gradient-text">Backyard Parties. Done Right.</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10">
            Premium DJ + DSLR Photo Booth experiences built for memorable celebrations.
          </p>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>We believe the best parties don&apos;t need ballrooms.</p>
            <p>They need good music. And a vibe that feels effortless.</p>
            <p>
              We design experiences for real-life celebrations: mixed ages, flexible timelines,
              spontaneous dance floors and moments people actually remember.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/vibe-lab" className="glow-plate glow-plate-gold px-8 py-4 rounded-xl font-bold">Build Your Vibe</Link>
            <Link href="/book" className="glow-plate glow-plate-cyan px-8 py-4 rounded-xl font-bold">Book Your Date</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-[#ffd3b8] via-[#ffc0e3] to-[#c9f6ff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-vice-ink mb-4">Two Vendors. One Booking. One Setup Plan.</h2>
          <p className="text-vice-ink/80 text-lg mb-10">
            Fam Jam brings professional DJ performance and a high quality, interactive DSLR Photo Booth together.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="neon-card p-6"><Music2 className="text-vice-pink mb-3" /><p>Three DJs rotating seamlessly with kid-appropriate cool energy.</p></div>
            <div className="neon-card p-6"><Camera className="text-vice-cyan mb-3" /><p>Real camera. Real lighting. Real prints. Digital gallery included.</p></div>
          </div>
          <p className="mt-8 font-semibold text-vice-ink">Simple 3-hour pricing: DJ Only $700 • Photo Booth Only $600 • DJ + Photo Booth $900 • Extra hour $150/hr</p>
        </div>
      </section>

      <section className="bg-vice-night star-speckle text-white px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black text-center mb-4">Fam Jam Collective</h2>
          <p className="text-center text-white/80 mb-12">Three DJs. Rotating styles. One vibe tailored to your crowd.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {djs.map((dj) => (
              <article key={dj.slug} className="neon-card-dark p-5 relative overflow-hidden group hover:-translate-y-1 transition-transform">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/5 via-transparent to-white/5" />
                <div className="flex items-start justify-between gap-2">
                  <Image src={dj.image} alt={dj.name} width={120} height={120} className="rounded-lg object-contain bg-white/5 p-2" />
                  <span className="glow-plate glow-plate-purple text-xs px-3 py-1 rounded-full">{dj.rarity}</span>
                </div>
                <h3 className="text-2xl font-bold mt-4">{dj.name}</h3>
                <div className="mt-2 flex flex-wrap gap-2">{dj.typeTags.map((tag) => <span key={tag} className="text-xs rounded-full bg-white/10 px-2 py-1">{tag}</span>)}</div>
                <div className="mt-4 space-y-2 text-sm">
                  <div><p className="mb-1 text-white/80">Energy</p><Meter value={dj.stats.energy} /></div>
                  <div><p className="mb-1 text-white/80">Kid-Friendly</p><Meter value={dj.stats.kidFriendly} /></div>
                </div>
                <div className="mt-4 bg-vice-pink/20 border border-vice-pink/40 rounded-lg p-3 text-sm"><strong>{dj.signatureMoment.title}</strong> — {dj.signatureMoment.description}</div>
                <div className="mt-4 text-sm space-y-1">
                  {dj.featuredSets.map((set) => (
                    <a key={set.title} href={set.youtubeUrl} target="_blank" rel="noreferrer" className="text-vice-cyan underline block">{set.title}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#eef7ff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-vice-ink mb-4">The Memory Lab™</h2>
          <p className="text-xl text-vice-muted mb-6">This isn&apos;t an iPad on a stick.</p>
          <p className="text-vice-muted max-w-3xl mx-auto mb-8">We use a real DSLR camera, flattering lighting, and custom-designed print templates for every event.</p>
          <p className="font-semibold text-vice-ink mb-8">Crisp 2x6 or 4x6 prints • Theme-matched design • Onsite attendant • Digital gallery</p>
          <Link href="/book?service=photo-booth-only" className="glow-plate glow-plate-pink px-8 py-4 rounded-xl font-bold">Add Photo Booth To My Event</Link>
        </div>
      </section>

      <section className="bg-vice-night text-white py-16 px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Ready to lock in your date?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="/book" className="glow-plate glow-plate-gold px-8 py-4 rounded-xl font-bold">Book Now</Link>
          <a href="sms:+13124149698" className="glow-plate glow-plate-cyan px-8 py-4 rounded-xl font-bold">Text 312-414-9698</a>
        </div>
        <p className="mt-6 text-white/70">Serving Thousand Oaks & surrounding areas.</p>
      </section>
    </>
  );
}
