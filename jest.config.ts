import type { Config } from 'jest'

export default async (): Promise<Config> => {
  return {
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@apps(.*)$': '<rootDir>/apps$1',
      '^@bin(.*)$': '<rootDir>/bin$1',
      '^@configs(.*)$': '<rootDir>/configs$1',
      '^@root(.*)$': '<rootDir>$1'
    }
  }
}
