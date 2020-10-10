const { resolve } = require('path');

const SRC_PATH = resolve(__dirname, 'src');

module.exports = {
  webpack: (config) => {
    config.plugins.resolve = {
      alias: {
        '_components': resolve(SRC_PATH, 'components'),
      },
    };

    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
