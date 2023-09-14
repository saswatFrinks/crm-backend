/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  roots: ['./test-api'],
  verbose: true,
  testEnvironment: 'node',
  detectOpenHandles: true,
  // fakeTimers: {
  //   enableGlobally: true,
  // },
}
