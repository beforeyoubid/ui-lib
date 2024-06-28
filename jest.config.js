/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['module_test', 'dist', '.d.ts', 'src/__tests__/utils'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['src/stories', '.stories.tsx'],
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
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy"
  }
};

module.exports = config;
