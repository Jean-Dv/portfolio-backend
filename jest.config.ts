import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json'
      }
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@bin(.*)$': '<rootDir>/bin$1',
      '^@configs(.*)$': '<rootDir>/configs$1',
      '^@root(.*)$': '<rootDir>$1'
    }
  }
}
