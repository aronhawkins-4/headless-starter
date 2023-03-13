/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        domains: ['sidekick-headless.local', 'headless-starter.local'],
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'headless-starter.local',
          port: '',
          pathname: '/image/upload/**',
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true
    }
  }