export interface Service {
  id: string;
  name: string;
  price?: number;
  description: string;
  duration?: string;
  features: string[];
  availabilityUrl?: string;
  includesQuestionnaire: boolean;
  questionnaireFields: string[];
}

export const services: Record<string, Service> = {
  hostHere: {
    id: 'host-here',
    name: 'Host Here — Pool Venue',
    description: 'Premium pool-venue rental with optional full-service planning',
    duration: 'Varies',
    features: [
      'Private pool venue (up to ~60 guests)',
      'Optional planning & design services',
      'Catering coordination available',
      'Add-on DJ and Photo Booth services',
      'Full-service setup and coordination',
    ],
    availabilityUrl: process.env.NEXT_PUBLIC_AVAIL_URL_HOST || '',
    includesQuestionnaire: true,
    questionnaireFields: [
      'eventDate',
      'timeWindow',
      'guestCount',
      'agesBreakdown',
      'celebrationType',
      'alcohol',
      'cateringPlan',
      'decorLevel',
      'weatherBackup',
      'notes',
    ],
  },
  djOnly: {
    id: 'dj-only',
    name: 'DJ Only',
    price: 700,
    description: 'Professional DJ service (3-hour session)',
    duration: '3 hours',
    features: [
      'Live DJ service with professional equipment',
      'Vibe curation (warm-up → peak → family moments → late set)',
      'Must-play and do-not-play list accommodation',
      'Family-friendly music selections',
      'Microphone available on request',
    ],
    availabilityUrl: process.env.NEXT_PUBLIC_AVAIL_URL_DJ || '',
    includesQuestionnaire: true,
    questionnaireFields: [
      'eventDate',
      'timeWindow',
      'guestCount',
      'agesBreakdown',
      'celebrationType',
      'address',
      'setupConstraints',
      'parking',
      'musicVibe',
      'mustPlay',
      'doNotPlay',
      'micNeeded',
      'notes',
    ],
  },
  photoBoothOnly: {
    id: 'photo-booth-only',
    name: 'Photo Booth Only',
    price: 600,
    description: 'Professional DSLR Photo Booth (3-hour session)',
    duration: '3 hours',
    features: [
      'Professional DSLR camera setup',
      'Custom print template design',
      'Flattering lighting and backdrops',
      'Attendant on-site throughout event',
      'Physical prints for guests',
      'Digital gallery option',
    ],
    availabilityUrl: process.env.NEXT_PUBLIC_AVAIL_URL_BOOTH || '',
    includesQuestionnaire: true,
    questionnaireFields: [
      'eventDate',
      'timeWindow',
      'guestCount',
      'agesBreakdown',
      'celebrationType',
      'address',
      'setupConstraints',
      'parking',
      'printSize',
      'templateTheme',
      'namesDateText',
      'props',
      'digitalGallery',
      'notes',
    ],
  },
  bundle: {
    id: 'dj-photo-booth-bundle',
    name: 'DJ + Photo Booth Bundle',
    price: 900,
    description: 'Professional DJ + DSLR Photo Booth (3-hour session) — Best Value',
    duration: '3 hours',
    features: [
      'Live DJ service + Professional DSLR Photo Booth',
      'Two vendors in one booking',
      'Coordinated setup and timing',
      'All DJ features included',
      'All Photo Booth features included',
      'Unified event timeline planning',
    ],
    availabilityUrl: process.env.NEXT_PUBLIC_AVAIL_URL_BUNDLE || '',
    includesQuestionnaire: true,
    questionnaireFields: [
      'eventDate',
      'timeWindow',
      'guestCount',
      'agesBreakdown',
      'celebrationType',
      'address',
      'setupConstraints',
      'parking',
      'musicVibe',
      'mustPlay',
      'doNotPlay',
      'micNeeded',
      'printSize',
      'templateTheme',
      'namesDateText',
      'props',
      'digitalGallery',
      'notes',
    ],
  },
};

export const servicesList = [
  services.hostHere,
  services.djOnly,
  services.photoBoothOnly,
  services.bundle,
];
