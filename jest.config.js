module.exports = {
  // Tell Jest to look for test files in the __tests__ folder
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map imports starting with @/ to src
  },
  // Configure test environment (e.g., Node.js)
  testEnvironment: 'jsdom',
  // Add setup and teardown files if needed
  // setupFiles: ['<rootDir>/setupTests.js'], // Optional setup file
  // setupFilesAfterEnv: ['<rootDir>/setupAfterEnv.js'], // Optional teardown file,
  // A list of file extensions Jest should treat as modules
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  // Transform files with TypeScript
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // Watch for file changes and rerun tests
  watchPlugins: [
    ['jest-watch-typeahead', { enabled: true }], // Optional for autocompletion
  ],
};
