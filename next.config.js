/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,   // prevents TS errors from breaking the build
  },
  eslint: {
    ignoreDuringBuilds: true,  // optional – ignore ESLint errors too
  },
};

module.exports = nextConfig;