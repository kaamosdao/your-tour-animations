/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.glsl$/,
        type: 'asset/source',
      }
    );

    return config;
  },
  eslint: {
    dirs: ['app', 'data', 'providers', 'store', 'utils'],
  },
};

module.exports = nextConfig;
