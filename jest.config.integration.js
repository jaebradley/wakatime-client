const sharedConfig = require('./jest.config.shared');

const config = {
  testMatch: ['**/**.integration.test.js'],
  ...sharedConfig,
};

module.exports = config;
