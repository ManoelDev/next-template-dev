const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

module.exports = withPWA({
  dest: 'public',
  disable: !isProd,
});
