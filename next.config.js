/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: 'bottom-right',
  },
  turbopack: {
    root: __dirname,
  },
}

module.exports = nextConfig
