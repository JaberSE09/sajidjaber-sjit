/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep nodemailer out of the Turbopack/webpack server bundle (native/smtp deps).
  serverExternalPackages: ['nodemailer'],
  images: {
    formats: ['image/avif', 'image/webp'],
    // Preserve existing long-lived local image cache (Next 16 default is 4h).
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
