const config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['module_test', 'dist', '.d.ts'],
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
