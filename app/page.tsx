import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Music, Camera, Sparkles, Award } from 'lucide-react';
import { taglines, djs } from '@/config/content';
import { HighlightCarousel } from '@/components/HighlightCarousel';

const heroSlides = [
  {
    src: '/photos/hero-1.png',
    alt: 'Fam Jam pool party celebration',
    caption: 'Elevated Celebrations',
    subcaption: 'Premium pool venue in Thousand Oaks — up to 60 guests',
  },
  {
    src: '/photos/hero-2.png',
    alt: 'DJ performance at a Fam Jam event',
    caption: 'Music That Moves You',
    subcaption: 'Professional DJs curated for every vibe and every age',
  },
  {
    src: '/photos/hero-3.png',
    alt: 'Guests having fun at a Fam Jam event',
    caption: 'Festival-Level Fun',
    subcaption: 'One booking. Two vendors. Zero stress.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-vice-cyan rounded-full blur-3xl animate-neon-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-vice-pink rounded-full blur-3xl animate-neon-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-vice-ink mb-6 leading-tight tracking-tight">
            {taglines.main}
          </h1>
          <p className="text-xl md:text-2xl text-vice-muted mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {taglines.supporting}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/book" className="glow-plate glow-plate-gold neon-hover px-8 py-4 rounded-xl text-lg font-bold">
              Book Your Event
            </Link>
            <Link href="/host-here" className="glow-plate glow-plate-cyan neon-hover px-8 py-4 rounded-xl text-lg font-bold">
              Explore Venue
            </Link>
          </div>
        </div>
      </section>

      {/* ── Highlight Photo Carousel ── */}
      <section className="px-4 pb-20 -mt-6">
        <div className="max-w-6xl mx-auto">
          <HighlightCarousel slides={heroSlides} />
        </div>
      </section>

      {/* ── Where's the Party? ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black text-center text-vice-ink mb-4">
            Where's the Party?
          </h2>
          <p className="text-center text-vice-muted text-lg mb-12 max-w-2xl mx-auto">
            Choose your celebration style — we bring the festival energy either way
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/host-here" className="neon-card neon-hover p-8 group">
              <div className="mb-6">
                <div className="glow-plate glow-plate-purple w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles size={32} />
                </div>
                <h3 className="font-display text-3xl font-bold text-vice-ink mb-3">
                  Host Here
                </h3>
                <p className="text-vice-muted text-lg mb-4">
                  Premium pool venue with optional full-service planning
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm text-vice-ink">
                  <span className="text-vice-cyan mr-3 font-bold text-lg">✓</span>
                  <span>Private pool venue (up to 60 guests)</span>
                </li>
                <li className="flex items-start text-sm text-vice-ink">
                  <span className="text-vice-cyan mr-3 font-bold text-lg">✓</span>
                  <span>Full-service planning available</span>
                </li>
                <li className="flex items-start text-sm text-vice-ink">
                  <span className="text-vice-cyan mr-3 font-bold text-lg">✓</span>
                  <span>Add-on DJ & Photo Booth services</span>
                </li>
              </ul>
              <div className="glow-plate glow-plate-purple neon-hover px-6 py-3 rounded-xl text-center font-bold">
                Learn More →
              </div>
            </Link>

            <Link href="/we-come-to-you" className="neon-card neon-hover p-8 group">
              <div className="mb-6">
                <div className="glow-plate glow-plate-pink w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Music size={32} />
                </div>
                <h3 className="font-display text-3xl font-bold text-vice-ink mb-3">
                  We Come To You
                </h3>
                <p className="text-vice-muted text-lg mb-4">
                  DJ + Photo Booth bundle for your venue
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm text-vice-ink">
                  <span className="text-vice-pink mr-3 font-bold text-lg">✓</span>
                  <span>Professional DJ with premium equipment</span>
                </li>
                <li className="flex items-start text-sm text-vice-ink">
                  <span className="text-vice-pink mr-3 font-bold text-lg">✓</span>
                  <span>DSLR Photo Booth with custom prints</span>
                </li>
                <li className="flex items-start text-sm text-vice-ink">
                  <span className="text-vice-pink mr-3 font-bold text-lg">✓</span>
                  <span>Two vendors, one booking</span>
                </li>
              </ul>
              <div className="glow-plate glow-plate-pink neon-hover px-6 py-3 rounded-xl text-center font-bold">
                Learn More →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Meet the Collective (DJ section) ── */}
      <section className="bg-vice-night star-speckle py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-black text-white text-glow-pink mb-4">
              Meet the Collective
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              {taglines.collective}
            </p>
          </div>

          {/* DJ Feature Photo */}
          <div className="relative w-full rounded-2xl overflow-hidden mb-12 shadow-xl" style={{ aspectRatio: '21/7' }}>
            <Image
              src="/photos/dj-action.png"
              alt="DJ performing at a Fam Jam Event"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-vice-midnight/80 via-vice-midnight/20 to-vice-midnight/80" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <p className="text-vice-cyan text-glow-cyan font-display text-3xl md:text-5xl font-black text-center drop-shadow-lg">
                The Sound. The Energy. The Vibe.
              </p>
            </div>
          </div>

          {/* DJ Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {djs.map((dj) => (
              <div key={dj.id} className="neon-card-dark p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-vice-cyan/20 to-vice-pink/20 border-2 border-vice-cyan/30 flex items-center justify-center overflow-hidden">
                  {dj.id === 'mixtress' ? (
                    <Image
                      src="/the_mixtress.png"
                      alt="The Mixtress Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  ) : dj.id === 'king-daddy' ? (
                    <Image
                      src="/KingDaddyDisco_Logo.png"
                      alt="King Daddy Disco Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  ) : dj.id === 'samplur' ? (
                    <Image
                      src="/ChatGPT_Image_Feb_19,_2026,_01_58_22_PM copy.png"
                      alt="Samplur Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  ) : (
                    <Music size={40} className="text-vice-cyan" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{dj.name}</h3>
                <p className="text-vice-cyan font-semibold mb-3">{dj.specialty}</p>
                <p className="text-white/70 text-sm leading-relaxed">{dj.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/we-come-to-you" className="glow-plate glow-plate-gold neon-hover px-8 py-4 rounded-xl text-lg font-bold inline-block">
              Book the DJ Experience
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Fam Jam? ── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-black text-center text-vice-ink mb-12">
            Why Fam Jam?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="neon-card p-6 text-center">
              <div className="glow-plate glow-plate-purple w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-vice-ink">Festival-Level Vibe</h3>
              <p className="text-vice-muted text-sm leading-relaxed">
                Professional-grade equipment and curated music create the ultimate celebration atmosphere
              </p>
            </div>

            <div className="neon-card p-6 text-center">
              <div className="glow-plate glow-plate-pink w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Camera size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-vice-ink">DSLR Quality</h3>
              <p className="text-vice-muted text-sm leading-relaxed">
                Flattering lighting, custom print templates, and professional attendant
              </p>
            </div>

            <div className="neon-card p-6 text-center">
              <div className="glow-plate glow-plate-cyan w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-vice-ink">One Booking</h3>
              <p className="text-vice-muted text-sm leading-relaxed">
                Simplified planning with coordinated setup and timing
              </p>
            </div>

            <div className="neon-card p-6 text-center">
              <div className="glow-plate glow-plate-gold w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-vice-ink">Premium Experience</h3>
              <p className="text-vice-muted text-sm leading-relaxed">
                Elevated, stress-free celebrations at our venue or yours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Booth Showcase ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-vice-blush/30 via-vice-paper to-vice-lilac/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-vice-pink/30">
              <div className="relative" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/photos/photobooth.png"
                  alt="Guests at the Fam Jam Photo Booth"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 576px"
                />
                {/* Subtle neon glow overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-vice-pink/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="glow-plate glow-plate-pink w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Camera size={32} />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-vice-ink mb-4 leading-tight">
                Memories Made<br />Print-Perfect
              </h2>
              <p className="text-vice-muted text-lg mb-6 leading-relaxed">
                Our DSLR-powered photo booth captures every smile, silly face, and celebration moment in stunning quality — then prints them on the spot.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Professional DSLR camera & ring light setup',
                  'Custom-themed print templates for your event',
                  'Unlimited prints throughout the night',
                  'Digital gallery delivered within 48 hours',
                  'Friendly on-site attendant included',
                ].map((feature) => (
                  <li key={feature} className="flex items-start text-vice-ink">
                    <span className="text-vice-pink mr-3 font-bold text-lg leading-6">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/we-come-to-you"
                className="glow-plate glow-plate-pink neon-hover px-6 py-3 rounded-xl font-bold inline-block"
              >
                See Photo Booth Packages →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── Ready to Celebrate? ── */}
      <section className="bg-vice-night star-speckle py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white text-glow-cyan mb-6">
            Ready to Celebrate?
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Book your event today and experience elevated celebrations with festival-level fun.
          </p>
          <Link href="/book" className="glow-plate glow-plate-gold neon-hover px-10 py-5 rounded-xl text-xl font-bold inline-block">
            Get Started →
          </Link>
        </div>
      </section>
    </>
  );
}
