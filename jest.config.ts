export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  rootDir: '.',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>config/jest/jestEmptyComponent.tsx',
    '^shared(.*)$': '<rootDir>src/shared$1'
  }
}; 
