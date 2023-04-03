const config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['module_test'],
  transform: {
    '\\.(ts|tsx)$': '@swc/jest',
  },
};

module.exports = config;
