const { resolve } = require('path');

const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
  webpack: (config) => {
    config.plugins.resolve = {
      alias: {
        '@/components': resolve(SRC_PATH, 'components'),
        '@/containers': resolve(SRC_PATH, 'containers'),
      },
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ];
  },
};
