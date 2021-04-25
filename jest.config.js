module.exports = {
    moduleFileExtensions: ["ts", "js"],
    transform: {
      "^.+\\.ts$": "ts-jest"
    },
    testMatch:["**/test/*.test.ts"],
    testEnvironment:'node'
}