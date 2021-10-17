module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: [
    '<rootDir>/integration'
  ],
  testMatch: [
    '**/integration/**/*.spec.ts'
  ],
  testTimeout: 20000,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'TM Sandbox API Integration Tests',
        outputDirectory: './junit',
        outputName: 'junit.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      }
    ]
  ],
  moduleNameMapper: {
    '^@integration/(.*)$': '<rootDir>/integration/$1',
    '^@services/(.*)$': '<rootDir>/integration/services/$1',
    '^@base/(.*)$': '<rootDir>/integration/base/$1',
    '^@enums/(.*)$': '<rootDir>/integration/enums/$1',
    '^@type/(.*)$': '<rootDir>/integration/types/$1',
    "^@ac/(.*)$": '<rootDir>/integration/acceptance-criteria/$1'
  }
};
