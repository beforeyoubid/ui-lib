const config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['module_test'],
  transform: {
    '\\.(ts|tsx)$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
};

module.exports = config;
