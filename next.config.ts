import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { qualities: [75, 85] },

  allowedDevOrigins: ['192.168.2.39'],
}

export default nextConfig
