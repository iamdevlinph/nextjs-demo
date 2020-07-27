const withOffline = require('next-offline');
const env = require('./env');

// const nextConfig = {
//   target: 'serverless',
//   webpack: (config, options) => {
//     config.plugins = config.plugins || []
//     return config
//   }
// }

/**
 * When using this code, encounters an error
 * UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be one of type string, Buffer, or URL. Received type undefined
 *
 * Fixed by using next-offline beta
 * https://github.com/hanford/next-offline/issues/195#issuecomment-543798363
 */
const nextConfig = {
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: false,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  env: { ...env },
};

module.exports = withOffline(nextConfig);
