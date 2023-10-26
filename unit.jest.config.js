/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  roots: ['./test-unit'],
  verbose: true,
  setupFiles: ['./jest.setup.ts'],
  testEnvironment: 'node',
}
