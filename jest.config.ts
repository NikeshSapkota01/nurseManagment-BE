/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  //   collectCoverage: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An array of directory names to be searched recursively up from the requiring module's location
  //   moduleDirectories: ["node_modules", "src"],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
  ],

  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>.$1",
    "^@routes(.*)$": "<rootDir>/src/routes$1",
    "^@models(.*)$": "<rootDir>/src/models$1",
    "^@uploads(.*)$": "<rootDir>/src/uploads$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@validators(.*)$": "<rootDir>/src/validators$1",
    "^@controllers(.*)$": "<rootDir>/src/controllers$1",
    "^@middlewares(.*)$": "<rootDir>/src/middlewares$1",
  },

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "/dist/"],

  // A map from regular expressions to paths to transformers
  transform: { "^.+\\.ts?$": "ts-jest" },

  // Indicates whether each individual test should be reported during the run
  verbose: true,
};
