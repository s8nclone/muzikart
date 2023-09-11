/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// next.config.js
// module.exports = {
//     webpack: (config, { isServer }) => {
//       if (!isServer) {
//         config.externals = {
//           fs: 'commonjs fs', // Exclude 'fs' module from client bundle
//         };
//       }
  
//       return config;
//     },
// };
  
module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};