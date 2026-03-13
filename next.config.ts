import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compress: true,
  images: {
    unoptimized: false,
  },
}

export default nextConfig
