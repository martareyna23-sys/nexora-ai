/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.lovart.ai',
        pathname: '/artifacts/agent/**',
      },
    ],
  },
}
module.exports = nextConfig
