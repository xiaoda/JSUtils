const {summarize} = require('./module')
const dateTests = require('./date')
const structureTests = require('./structure')
const tests = {
  ...dateTests,
  ...structureTests
}

for (let key in tests) {
  const test = tests[key]
  test()
}

summarize()