/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/host-here', destination: '/services', permanent: true },
      { source: '/we-come-to-you', destination: '/services', permanent: true },
    ];
  },
};

module.exports = nextConfig;
