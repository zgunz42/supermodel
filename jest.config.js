module.exports = {
  roots: ['<rootDir>/packages'],
  cacheDirectory: '<rootDir>/.cache/jest',
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ['packages/*/src/**/*.{js,ts}'],
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '^@supermodel/([^/]+)': '<rootDir>/packages/$1/src',
  },
  notify: false,
  // notifyMode: 'success-change',
  testEnvironment: 'node',
  testMatch: ['**/*\\.test.(js|ts)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};
