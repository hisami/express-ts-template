module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@controllers(.*)$": "<rootDir>/src/controllers/$1",
    "^@entities(.*)$": "<rootDir>/src/entities/$1",
    "^@repositories(.*)$": "<rootDir>/src/repositories/$1",
  },
};
