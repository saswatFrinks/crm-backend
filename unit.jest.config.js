/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['./test-unit'],
  verbose: true,
  testEnvironment: 'node',
  fakeTimers: {
    enableGlobally: true,
  },
}
