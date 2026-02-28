export type DjRarity = 'LEGENDARY' | 'EPIC' | 'RARE';

export interface DJProfile {
  name: string;
  slug: string;
  rarity: DjRarity;
  typeTags: string[];
  stats: {
    energy: number;
    kidFriendly: number;
  };
  specialSkills: string[];
  signatureMoment: {
    title: string;
    description: string;
  };
  featuredSets: Array<{
    title: string;
    youtubeUrl: string;
  }>;
  image: string;
  socials: {
    instagram?: string;
    youtube?: string;
  };
}

export const djs: DJProfile[] = [
  {
    name: 'King Daddy Disco',
    slug: 'king-daddy-disco',
    rarity: 'LEGENDARY',
    typeTags: ['Disco House', 'Throwback', 'Peak Energy'],
    stats: { energy: 5, kidFriendly: 4 },
    specialSkills: ['Disco-house edits', 'Golden hour lift-offs', 'Rapid fire request transitions'],
    signatureMoment: {
      title: 'The ABBA Lift',
      description: 'Golden hour hits and the entire backyard sings together.',
    },
    featuredSets: [
      { title: 'Sunset Pool Throwback Set', youtubeUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8' },
      { title: "Disco House Groovin'", youtubeUrl: 'https://www.youtube.com/watch?v=OPf0YbXqDm0' },
    ],
    image: '/KingDaddyDisco_Logo.png',
    socials: { instagram: 'https://instagram.com', youtube: 'https://youtube.com' },
  },
  {
    name: 'The Mixtress',
    slug: 'the-mixtress',
    rarity: 'EPIC',
    typeTags: ['Indie', '2000s', 'Pop Crossover', 'Clean Flow'],
    stats: { energy: 3, kidFriendly: 5 },
    specialSkills: [
      'Seamless crossover transitions',
      'Clean edits without losing edge',
      'Request-driven momentum',
    ],
    signatureMoment: {
      title: 'The Sunset Switch',
      description: 'Disco groove flips into a 2000s singalong that pulls everyone in.',
    },
    featuredSets: [
      { title: '2000s Backyard Set', youtubeUrl: 'https://www.youtube.com/watch?v=uelHwf8o7_U' },
      { title: 'Clean Club Mix', youtubeUrl: 'https://www.youtube.com/watch?v=fJ9rUzIMcZQ' },
    ],
    image: '/the_mixtress.png',
    socials: { instagram: 'https://instagram.com', youtube: 'https://youtube.com' },
  },
  {
    name: 'Samplur',
    slug: 'samplur',
    rarity: 'RARE',
    typeTags: ['Tech House', 'LA Club Energy', 'Modern House'],
    stats: { energy: 5, kidFriendly: 3 },
    specialSkills: ['Vibey house flows', 'Smooth transitions', 'King of cool'],
    signatureMoment: {
      title: 'Glow Mode Drop',
      description: 'Tempo rises and the backyard transforms into a mini festival moment.',
    },
    featuredSets: [
      { title: 'After Dark Backyard Set', youtubeUrl: 'https://www.youtube.com/watch?v=YQHsXMglC9A' },
      { title: 'Modern House Live Mix', youtubeUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
    ],
    image: '/ChatGPT_Image_Feb_19,_2026,_01_58_22_PM copy.png',
    socials: { instagram: 'https://instagram.com', youtube: 'https://youtube.com' },
  },
];
