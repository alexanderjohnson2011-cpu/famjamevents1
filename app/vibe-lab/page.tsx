'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CrowdMix, EraBias, PartyType, VibeInput, pickVibe } from '@/config/vibes';
import { useSearchParams } from 'next/navigation';

const defaultInput: VibeInput = {
  partyType: 'Birthday',
  crowdMix: 'Mixed Ages',
  energyLevel: 3,
  eraBias: 'Disco-House',
  cleanMode: false,
};

export default function VibeLabPage() {
  const params = useSearchParams();
  const [input, setInput] = useState<VibeInput>({
    partyType: (params.get('partyType') as PartyType) || defaultInput.partyType,
    crowdMix: (params.get('crowdMix') as CrowdMix) || defaultInput.crowdMix,
    energyLevel: Number(params.get('energyLevel') || defaultInput.energyLevel) as 1 | 2 | 3 | 4,
    eraBias: (params.get('eraBias') as EraBias) || defaultInput.eraBias,
    cleanMode: params.get('cleanMode') === 'true',
  });

  const vibe = useMemo(() => pickVibe(input), [input]);
  const cardRef = useRef<HTMLDivElement>(null);

  const shareQuery = new URLSearchParams({
    partyType: input.partyType,
    crowdMix: input.crowdMix,
    energyLevel: String(input.energyLevel),
    eraBias: input.eraBias,
    cleanMode: String(input.cleanMode),
  }).toString();

  const bookingQuery = new URLSearchParams({
    vibeProfile: vibe.name,
    partyType: input.partyType,
    crowdMix: input.crowdMix,
    energyLevel: String(input.energyLevel),
    eraBias: input.eraBias,
    cleanMode: String(input.cleanMode),
    recommendedPackage: vibe.recommendedPackage,
    signatureMomentTitle: vibe.signatureMoment.title,
    signatureMomentDesc: vibe.signatureMoment.description,
  }).toString();

  const downloadCard = async () => {
    if (!cardRef.current) return;
    const node = cardRef.current.cloneNode(true) as HTMLElement;
    node.style.margin = '0';
    const width = cardRef.current.offsetWidth;
    const height = cardRef.current.offsetHeight;
    const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%">${new XMLSerializer().serializeToString(node)}</foreignObject></svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width * 2;
      canvas.height = height * 2;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(2, 2);
        ctx.drawImage(img, 0, 0);
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = `${vibe.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-vibe-card.png`;
        a.click();
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div>
      <section className="bg-vice-night text-white px-4 py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl font-black vice-gradient-text mb-4">Build Your Backyard Vibe™</h1>
        <p className="text-white/80 max-w-3xl mx-auto">Pick your crowd + energy and we&apos;ll recommend a vibe profile, sample set, and simple party plan.</p>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="neon-card p-6"><h2 className="text-2xl font-black mb-3">What We Are</h2><ul className="space-y-2 text-vice-muted"><li>• Curated DJ sets for mixed-age crowds</li><li>• Flexible backyard timelines</li><li>• Kid-appropriate cool</li><li>• Pro gear, smooth execution</li></ul></div>
          <div className="neon-card p-6"><h2 className="text-2xl font-black mb-3">What We&apos;re Not</h2><ul className="space-y-2 text-vice-muted"><li>• Scripted wedding intros</li><li>• Corny crowd games</li><li>• Ballroom energy</li><li>• Overproduced MC hype</li></ul></div>
        </div>
      </section>

      <section className="bg-vice-night px-4 py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="neon-card p-6 space-y-4">
            <h2 className="text-3xl font-black text-vice-ink">Build Your Backyard Vibe™</h2>
            <label className="block text-sm font-semibold">Party Type
              <select className="w-full mt-1 border rounded-lg p-2" value={input.partyType} onChange={(e) => setInput((p) => ({ ...p, partyType: e.target.value as PartyType }))}>
                {['Birthday', 'Pool Party', 'Milestone', 'Block Party', 'Just Because'].map((v) => <option key={v}>{v}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold">Crowd Mix
              <select className="w-full mt-1 border rounded-lg p-2" value={input.crowdMix} onChange={(e) => setInput((p) => ({ ...p, crowdMix: e.target.value as CrowdMix }))}>
                {['Mostly Adults', 'Mixed Ages', 'Mostly Kids/Teens'].map((v) => <option key={v}>{v}</option>)}
              </select>
            </label>
            <label className="block text-sm font-semibold">Energy Level ({input.energyLevel})
              <input type="range" min={1} max={4} value={input.energyLevel} onChange={(e) => setInput((p) => ({ ...p, energyLevel: Number(e.target.value) as 1 | 2 | 3 | 4 }))} className="w-full" />
            </label>
            <label className="block text-sm font-semibold">Era Bias
              <select className="w-full mt-1 border rounded-lg p-2" value={input.eraBias} onChange={(e) => setInput((p) => ({ ...p, eraBias: e.target.value as EraBias }))}>
                {['Throwbacks', 'Disco-House', 'Modern', 'Festival'].map((v) => <option key={v}>{v}</option>)}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm font-semibold"><input type="checkbox" checked={input.cleanMode} onChange={(e) => setInput((p) => ({ ...p, cleanMode: e.target.checked }))} /> Clean Mode (Kid-Appropriate Cool)</label>
            <Link href={`/vibe-lab?${shareQuery}`} className="text-vice-pink underline text-sm">Share this vibe via link</Link>
          </div>

          <div ref={cardRef} className="neon-card-dark p-6 text-white self-start">
            <h3 className="font-display text-3xl font-black mb-2">{vibe.name}</h3>
            <p>{'★'.repeat(vibe.energyStars)}{'☆'.repeat(5 - vibe.energyStars)}</p>
            <p className="mt-2 text-white/80">Crowd: {input.crowdMix} • Era: {input.eraBias}</p>
            <div className="mt-4 bg-vice-pink/20 rounded-lg p-3 border border-vice-pink/40">
              <p className="font-bold">{vibe.signatureMoment.title}</p>
              <p className="text-sm text-white/80">{vibe.signatureMoment.description}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-white/70">Delivered by:</p>
              <p className="font-semibold">{vibe.momentLeads.join(' → ')}</p>
            </div>
            <p className="mt-4"><span className="text-white/70">Recommended package:</span> <span className="font-bold text-vice-cyan">{vibe.recommendedPackage}</span></p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-6 flex flex-col sm:flex-row gap-3">
          <button onClick={downloadCard} className="glow-plate glow-plate-gold px-6 py-3 rounded-xl font-bold">Download Vibe Card</button>
          <Link href={`/book?${bookingQuery}`} className="glow-plate glow-plate-cyan px-6 py-3 rounded-xl font-bold text-center">Send to Booking</Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Setlist Story Mode</h2>
          <div className="grid md:grid-cols-2 gap-4 text-vice-muted">
            <p><strong>Arrival:</strong> {vibe.setlistStory.arrival}</p>
            <p><strong>Lift-Off:</strong> {vibe.setlistStory.liftOff}</p>
            <p><strong>Peak:</strong> {vibe.setlistStory.peak}</p>
            <p><strong>Signature Moment:</strong> {vibe.setlistStory.signatureMoment}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7ff] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6">Party Playbooks</h2>
          <Accordion type="single" collapsible className="neon-card p-4">
            <AccordionItem value="birthday"><AccordionTrigger>Backyard Birthday Playbook</AccordionTrigger><AccordionContent>Arrival groove • First lift-off • Cake moment timing • Peak window • Easy close</AccordionContent></AccordionItem>
            <AccordionItem value="pool"><AccordionTrigger>Pool Party Playbook</AccordionTrigger><AccordionContent>Sunset build • Splash break • Glow mode • Peak dance</AccordionContent></AccordionItem>
            <AccordionItem value="milestone"><AccordionTrigger>Milestone Night Playbook</AccordionTrigger><AccordionContent>Nostalgia open • Memory moment • High-energy peak • Crowd photo moment</AccordionContent></AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
