const {summarize} = require('./module')
const dateTests = require('./date')
const tests = {...dateTests}

for (let key in tests) {
  const test = tests[key]
  test()
}

summarize()