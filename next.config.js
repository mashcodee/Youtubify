const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    API_HOST: process.env.API_HOST,
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  pwa: {
    dest: 'public',
    runtimeCaching
  },

  // This is not required to make it into a PWA, but is a nice way to clean up your imports
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  }
});