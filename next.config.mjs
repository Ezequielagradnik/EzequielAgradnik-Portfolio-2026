/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    // Stamped at build time; shown in the footer as "Last updated".
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
  },
}

export default nextConfig
