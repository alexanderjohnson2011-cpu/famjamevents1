export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  duration: string;
  features: string[];
}

export const services: Record<'djOnly' | 'photoBoothOnly' | 'bundle', Service> = {
  djOnly: {
    id: 'dj-only',
    name: 'DJ Only',
    price: 700,
    description: 'Professional DJ service (3 hours included)',
    duration: '3 hours',
    features: [
      'Live DJ set with premium sound',
      'Must-play + do-not-play planning',
      'Kid-appropriate cool energy',
    ],
  },
  photoBoothOnly: {
    id: 'photo-booth-only',
    name: 'Photo Booth Only',
    price: 600,
    description: 'DSLR photo booth service (3 hours included)',
    duration: '3 hours',
    features: ['DSLR quality photos', 'Flattering light setup', 'Custom print template each event'],
  },
  bundle: {
    id: 'bundle',
    name: 'DJ + Photo Booth Bundle',
    price: 900,
    description: 'Most Popular / Best Value (3 hours included)',
    duration: '3 hours',
    features: ['Two vendors, one booking', 'One coordinated setup plan', 'Best value package'],
  },
};

export const servicesList = [services.djOnly, services.photoBoothOnly, services.bundle];
