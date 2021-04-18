module.exports = {
  cssModules: true,
  webpack: (config, options) => {
    return config;
  },
  env: {
    API_GATEWAY: 'http://localhost:3002',
    PORT: 5000,
  },
};
