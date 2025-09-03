/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  eslint: {
    // Disable ESLint during builds to avoid deployment issues
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
