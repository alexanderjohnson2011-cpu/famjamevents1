export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
  features: string[];
  availabilityUrl?: string;
}


export const services: Record<string, Service> = {
  djOnly: {
    id: 'dj-only',
    name: 'DJ Only',
    price: 700,
    description: 'Professional DJ service (offsite)',
    duration: '3 hours included',
    features: ['Live DJ + pro sound', 'Curated set flow', 'Kid-appropriate cool'],
  },
  photoBoothOnly: {
    id: 'photo-booth-only',
    name: 'Photo Booth Only',
    price: 600,
    description: 'DSLR booth with attendant',
    duration: '3 hours included',
    features: ['DSLR camera', 'Custom templates', 'Prints + digital gallery'],
  },
  bundle: {
    id: 'dj-photo-booth-bundle',
    name: 'DJ + Photo Booth Bundle',
    price: 900,
    description: 'Two vendors, one booking',
    duration: '3 hours included',
    features: ['DJ + booth together', 'Coordinated setup', 'Best value'],
  },
};
