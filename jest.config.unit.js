const sharedConfig = require('./jest.config.shared');

const config = {
  testMatch: ['**/**.unit.test.js'],
  ...sharedConfig,
};

module.exports = config;
