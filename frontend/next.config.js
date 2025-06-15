/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://backend:8000/api/:path*', // Proxy to Django backend
      },
    ];
  },
};

const path = require('path');

nextConfig.webpack = (config) => {
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  config.resolve.alias['@'] = path.resolve(__dirname, 'app');
  return config;
};

module.exports = nextConfig;
