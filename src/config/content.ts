export const taglines = {
  main: 'Elevated Celebrations. Festival-Level Fun.',
  supporting: 'Premium offsite DJ + DSLR Photo Booth experiences for backyards, pools, and milestones.',
  collective: 'Three DJs, rotating styles, one vibe tailored to your crowd (kid-appropriate cool).',
  offsite: 'Two vendors. One booking. One setup plan.',
};

export interface DJ {
  id: string;
  name: string;
  description: string;
  specialty: string;
  social: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

export const djs: DJ[] = [
  {
    id: 'mixtress',
    name: 'The Mixtress',
    description: 'Disco & House specialist with 15+ years mixing experience',
    specialty: 'Warm-up & vibe building',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'king-daddy',
    name: 'King Daddy Disco',
    description: 'Funk, throwbacks & family moments curator',
    specialty: 'Peak energy & crowd favorites',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      youtube: 'https://youtube.com',
    },
  },
  {
    id: 'samplur',
    name: 'Samplur',
    description: 'Hip-hop, top 40 & late-night specialist',
    specialty: 'Late set energy & transitions',
    social: {
      instagram: 'https://instagram.com',
      twitter: 'https://x.com',
      youtube: 'https://youtube.com',
    },
  },
];

export interface VenueFact {
  label: string;
  value: string;
}

export const venueFacts: VenueFact[] = [
  { label: 'Capacity', value: 'Up to 60 guests' },
  { label: 'Pool Setup', value: 'Premium saltwater resort pool' },
  { label: 'Parking', value: 'Ample on-site parking' },
  { label: 'Amenities', value: 'Covered patio, restrooms, kitchen access' },
  { label: 'Lighting', value: 'Professional uplighting available' },
  { label: 'Sound System', value: 'Premium outdoor speakers' },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const hostHereFaqs: FAQ[] = [
  {
    question: 'What\'s included in a venue rental?',
    answer: 'Our venue rental includes access to the pool facility, covered patio areas, restrooms, and basic tables/chairs. Optional add-ons include planning services, catering coordination, DJ services, and our professional photo booth.',
  },
  {
    question: 'How far in advance should we book?',
    answer: 'We recommend booking 6-8 weeks in advance for weekend dates, though we accommodate rush requests based on availability. Contact us to discuss your timeline.',
  },
  {
    question: 'Can we bring outside catering?',
    answer: 'Yes! We welcome outside catering. Our coordination service helps manage timing, setup, and logistics with your chosen caterer.',
  },
  {
    question: 'What\'s your cancellation policy?',
    answer: 'We offer flexible cancellation options. Contact us directly to discuss terms that work for your event.',
  },
  {
    question: 'Is there weather backup?',
    answer: 'Our venue includes covered areas perfect for light rain. For severe weather, we discuss backup dates and contingency plans during booking.',
  },
];

export const offsiteFaqs: FAQ[] = [
  {
    question: 'How do we book the DJ + Photo Booth bundle?',
    answer: 'Start on our booking page, select the bundle option, check availability, and fill out your event details. We coordinate both services and confirm everything by phone.',
  },
  {
    question: 'Can we customize the music and photo booth theme?',
    answer: 'Absolutely! We customize everything. Tell us your must-play and do-not-play songs, and we design photo booth templates to match your event vibe.',
  },
  {
    question: 'What if we need just the DJ or just the photo booth?',
    answer: 'We offer both individually! DJ only is $700, Photo Booth only is $600. The bundle (both together) is $900 and represents our best value.',
  },
  {
    question: 'How long is the service?',
    answer: 'Our standard packages are 3 hours. We can discuss extensions or custom durations based on your needs.',
  },
  {
    question: 'Do we get digital copies of photos?',
    answer: 'Yes! Digital gallery is included with the Photo Booth. Guests also get printed photos on-site.',
  },
];

export const proofPoints = [
  {
    icon: 'Sparkles',
    title: 'Festival-Level Vibe',
    description: 'Professional-grade equipment and curated music create the ultimate celebration atmosphere, kid-appropriate cool throughout.',
  },
  {
    icon: 'Camera',
    title: 'DSLR Quality Every Time',
    description: 'Flattering lighting, custom print templates, and professional attendant ensure photo-booth memories worth keeping.',
  },
  {
    icon: 'Package',
    title: 'One Booking, Two Vendors',
    description: 'Simplified planning with coordinated setup, timing, and execution. Fewer calls, fewer hassles, one confirmed vibe.',
  },
  {
    icon: 'Home',
    title: 'Premium Venue or Your Space',
    description: 'Choose our private pool resort or we bring everything to you. Either way, elevated, stress-free celebration.',
  },
];

export interface PrintTemplate {
  id: string;
  title: string;
  description: string;
  theme: string;
}

export const printTemplates: PrintTemplate[] = [
  {
    id: 'disco-party',
    title: 'Disco Party',
    description: 'Retro disco ball and neon theme',
    theme: 'disco',
  },
  {
    id: 'summer-splash',
    title: 'Summer Splash',
    description: 'Bright pool party vibes',
    theme: 'summer',
  },
  {
    id: 'glow-party',
    title: 'Glow Party',
    description: 'Neon lights and festival energy',
    theme: 'glow',
  },
];
