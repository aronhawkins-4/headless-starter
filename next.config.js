/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['sidekick-headless.local'],
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'sidekick-headless.local',
          port: '',
          pathname: '/image/upload/**',
        },
      ],
    },
  }