const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testRegex: TEST_REGEX,
  moduleNameMapper: {
    '@src(.*)$': '<rootDir>/src$1',
    '@pages(.*)$': '<rootDir>/pages$1',
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  collectCoverage: true,
  collectCoverageFrom: ['src/components/**/*.{ts,tsx}', '!**/node_modules/**'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
