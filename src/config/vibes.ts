export type PartyType = 'Birthday' | 'Pool Party' | 'Milestone' | 'Block Party' | 'Just Because';
export type CrowdMix = 'Mostly Adults' | 'Mixed Ages' | 'Mostly Kids/Teens';
export type EraBias = 'Throwbacks' | 'Disco-House' | 'Modern' | 'Festival';

export interface VibeInput {
  partyType: PartyType;
  crowdMix: CrowdMix;
  energyLevel: 1 | 2 | 3 | 4;
  eraBias: EraBias;
  cleanMode: boolean;
}

export interface VibeProfile {
  id: string;
  name: string;
  popularity?: string;
  energyStars: number;
  signatureMoment: { title: string; description: string };
  recommendedPackage: string;
  musicDna: string;
  positioning: string;
  momentLeads: string[];
  setlistStory: { arrival: string; liftOff: string; peak: string; signatureMoment: string };
}

export const vibeProfiles: Record<string, VibeProfile> = {
  sunsetThrowback: {
    id: 'sunsetThrowback',
    name: 'Sunset Throwback™',
    energyStars: 3,
    signatureMoment: {
      title: 'The ABBA Lift',
      description: 'Golden hour hits, the chorus drops, and the entire backyard is singing together.',
    },
    recommendedPackage: 'DJ + Photo Booth Bundle',
    musicDna: '80s rock & disco → 90s pop → 2000s bangers',
    positioning: 'Nostalgia-fueled sing-alongs from poolside groove to peak joy.',
    momentLeads: ['Arrival: King Daddy Disco', 'Build: The Mixtress', 'Peak: King Daddy Disco'],
    setlistStory: {
      arrival: 'Groove-heavy disco-house while guests arrive.',
      liftOff: 'A classic singalong pulls in non-dancers quickly.',
      peak: 'Nostalgic bangers and clean remixes fill the floor.',
      signatureMoment: 'The ABBA Lift',
    },
  },
  backyardDiscoRevival: {
    id: 'backyardDiscoRevival',
    name: 'Backyard Disco Revival™',
    popularity: 'Most Popular',
    energyStars: 4,
    signatureMoment: {
      title: 'The Sunset Switch',
      description: 'Disco-house groove seamlessly flips into a recognizable singalong that pulls everyone in.',
    },
    recommendedPackage: 'DJ + Photo Booth Bundle',
    musicDna: 'Purple Disco Machine energy, 80s edits, 2000s flips',
    positioning: 'Cool, groovy, accessible energy that feels elevated but inclusive.',
    momentLeads: ['Groove: King Daddy Disco', 'Momentum: Samplur', 'Close/Requests: The Mixtress'],
    setlistStory: {
      arrival: 'Groove-heavy disco-house while guests arrive.',
      liftOff: 'Recognizable crossover track pulls non-dancers in.',
      peak: 'High-energy remix moment with full dance floor.',
      signatureMoment: 'The Sunset Switch',
    },
  },
  afterDarkBackyard: {
    id: 'afterDarkBackyard',
    name: 'After Dark Backyard™',
    energyStars: 5,
    signatureMoment: {
      title: 'Glow Mode Drop',
      description: 'Tempo rises, lights shift, and the backyard transforms into a festival-style peak moment.',
    },
    recommendedPackage: 'DJ + Photo Booth Bundle + Extra Hour',
    musicDna: 'Fred Again → Fisher → higher BPM → bass accents',
    positioning: 'Backyard festival simulation with a controlled late-night surge.',
    momentLeads: ['Build: Samplur', 'Lift: King Daddy Disco', 'Peak BPM: Samplur', 'Close: The Mixtress'],
    setlistStory: {
      arrival: 'Moody warm-up and modern edits set the tone.',
      liftOff: 'Tempo climbs and transitions tighten.',
      peak: 'Festival-coded drop with clean crowd control.',
      signatureMoment: 'Glow Mode Drop',
    },
  },
  cleanClubEnergy: {
    id: 'cleanClubEnergy',
    name: 'Clean Club Energy™',
    energyStars: 4,
    signatureMoment: {
      title: 'The Singalong Swarm',
      description: 'A clean remix drop where the entire crowd floods the dance floor and knows every word.',
    },
    recommendedPackage: 'DJ Only or DJ + Photo Booth Bundle',
    musicDna: 'Current hits, clean hip hop edits, TikTok remixes',
    positioning: 'Modern and edgy, fully clean, fast-paced request-driven energy.',
    momentLeads: ['Open: The Mixtress', 'Flow: Samplur', 'Remix Moment: King Daddy Disco'],
    setlistStory: {
      arrival: 'Current clean hits and fresh remixes welcome guests.',
      liftOff: 'Request-driven crossover engages teens and parents.',
      peak: 'Fast-paced clean edits keep the floor packed.',
      signatureMoment: 'The Singalong Swarm',
    },
  },
};

export function pickVibe(input: VibeInput): VibeProfile {
  const teenParty = /teen|preteen/i.test(input.partyType);

  if (input.crowdMix === 'Mostly Kids/Teens' || (input.cleanMode && teenParty)) {
    return vibeProfiles.cleanClubEnergy;
  }

  if (
    input.energyLevel === 4 &&
    input.crowdMix === 'Mostly Adults' &&
    (input.eraBias === 'Festival' || input.eraBias === 'Modern')
  ) {
    return vibeProfiles.afterDarkBackyard;
  }

  if (input.eraBias === 'Throwbacks' && input.energyLevel <= 3) {
    return vibeProfiles.sunsetThrowback;
  }

  if (
    input.eraBias === 'Disco-House' ||
    ([2, 3].includes(input.energyLevel) && input.crowdMix === 'Mixed Ages')
  ) {
    return vibeProfiles.backyardDiscoRevival;
  }

  return vibeProfiles.backyardDiscoRevival;
}
