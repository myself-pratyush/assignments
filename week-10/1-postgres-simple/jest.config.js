// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Optionally, set up paths to match your project structure
    roots: ['<rootDir>/src'],
    // Transform settings if you have custom needs, but this is optional since ts-jest is preset
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  };
  
// jest.config.js
// module.exports = {
//   "jest": {
//     "testEnvironment": "node",
//     "verbose": true,
//     "moduleFileExtensions": [
//       "js",
//       "ts",
//       "tsx",
//       "json",
//       "node"
//     ],
//     "testPathIgnorePatterns": [
//       "/node_modules/"
//     ],
//     "collectCoverage": true,
//     "transform": {
//       "^.+\\.tsx?$": "ts-jest"
//     },
//     "setupTestFrameworkScriptFile": "./setupTests.ts",
//     "testMatch": [
//         "**/*.test.js"
//      ]
//   },
// }