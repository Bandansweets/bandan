/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;   // if .js
// export default nextConfig;   // if .mjs