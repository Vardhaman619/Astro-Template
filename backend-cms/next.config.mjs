import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    serverActions: {
      allowedOrigins: ["congenial-goldfish-r5769x4j44q2566g-3000.app.github.dev", "*"],
    },
    allowedDevOrigins: ["congenial-goldfish-r5769x4j44q2566g-3000.app.github.dev", "*"],
  }
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
