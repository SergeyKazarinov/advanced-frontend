/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  // verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

  moduleDirectories: ['node_modules', 'scr'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '.',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePaths: ['<rootDir>src/'],
  setupFilesAfterEnv: ['./config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(
      __dirname,
      './config/jest',
      'jestEmptyComponent.tsx',
    ),
    '^@entities(.*)$': '<rootDir>src/entities$1',
    '^@pages(.*)$': '<rootDir>src/pages$1',
    '^@features(.*)$': '<rootDir>src/features$1',
    '^@shared(.*)$': '<rootDir>src/shared$1',
    '^@app(.*)$': '<rootDir>src/app$1',
    '^@widgets(.*)$': '<rootDir>src/widgets$1',
  },
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: '<rootDir>/reports/unit.html',
      },
    ],
  ],
};

export default config;
