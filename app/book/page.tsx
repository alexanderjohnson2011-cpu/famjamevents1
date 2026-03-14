'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function BookPage() {
  const params = useSearchParams();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const vibeSummary = useMemo(() => ({
    vibeProfile: params.get('vibeProfile') || '',
    partyType: params.get('partyType') || '',
    crowdMix: params.get('crowdMix') || '',
    energyLevel: params.get('energyLevel') || '',
    eraBias: params.get('eraBias') || '',
    cleanMode: params.get('cleanMode') || '',
    recommendedPackage: params.get('recommendedPackage') || '',
    signatureMomentTitle: params.get('signatureMomentTitle') || '',
    signatureMomentDesc: params.get('signatureMomentDesc') || '',
  }), [params]);

  const hasVibe = Boolean(vibeSummary.vibeProfile);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const payload = {
      service: formData.get('service'),
      eventDate: formData.get('eventDate'),
      timeWindow: formData.get('timeWindow'),
      guestCount: formData.get('guestCount'),
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      notes: formData.get('notes'),
      vibeSummary,
    };

    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setLoading(false);
    if (res.ok) setSent(true);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl font-black text-vice-ink mb-4 text-center">Book Your Event</h1>
        <p className="text-center text-vice-muted mb-8">Offsite only: DJ + DSLR Photo Booth</p>

        {hasVibe && (
          <div className="neon-card-dark p-5 text-white mb-8">
            <h2 className="text-2xl font-bold mb-2">Vibe Summary</h2>
            <p><strong>{vibeSummary.vibeProfile}</strong> • Energy {vibeSummary.energyLevel}</p>
            <p>{vibeSummary.partyType} • {vibeSummary.crowdMix} • {vibeSummary.eraBias}</p>
            <p className="mt-2">{vibeSummary.signatureMomentTitle}: {vibeSummary.signatureMomentDesc}</p>
            <p className="mt-2 text-vice-cyan font-semibold">Recommended: {vibeSummary.recommendedPackage}</p>
          </div>
        )}

        <form className="neon-card p-6 space-y-4" onSubmit={submit}>
          <select name="service" className="w-full border rounded-lg p-3" defaultValue="dj-photo-booth-bundle" required>
            <option value="dj-only">DJ Only ($700)</option>
            <option value="photo-booth-only">Photo Booth Only ($600)</option>
            <option value="dj-photo-booth-bundle">DJ + Photo Booth Bundle ($900)</option>
          </select>
          <input name="eventDate" type="date" className="w-full border rounded-lg p-3" required />
          <input name="timeWindow" placeholder="Time window (ex: 4pm - 7pm)" className="w-full border rounded-lg p-3" />
          <input name="guestCount" type="number" placeholder="Guest count" className="w-full border rounded-lg p-3" />
          <input name="name" placeholder="Your name" className="w-full border rounded-lg p-3" required />
          <input name="email" type="email" placeholder="Email" className="w-full border rounded-lg p-3" required />
          <input name="phone" placeholder="Phone" className="w-full border rounded-lg p-3" />
          <textarea name="notes" placeholder="Tell us about the party" className="w-full border rounded-lg p-3 min-h-[100px]" />
          <button disabled={loading} className="glow-plate glow-plate-gold rounded-xl px-6 py-3 font-bold">{loading ? 'Sending...' : 'Send Booking Request'}</button>
          {sent && <p className="text-green-700 font-semibold">Thanks! Your request was sent.</p>}
        </form>
      </div>
    </section>
  );
}
