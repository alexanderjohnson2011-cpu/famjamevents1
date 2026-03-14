export const siteConfig = {
  name: 'Fam Jam Events',
  description: 'Offsite-only DJ + DSLR Photo Booth experiences serving Thousand Oaks and surrounding areas',
  phone: '312-414-9698',
  serviceArea: 'Thousand Oaks & surrounding areas',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Vibe Lab', href: '/vibe-lab' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Book', href: '/book' },
  ],
  socials: [
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: 'Music' },
  ],
};

export type NavItem = typeof siteConfig.nav[0];
export type Social = typeof siteConfig.socials[0];
