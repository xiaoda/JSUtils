const testsCount = {
  pass: 0,
  fail: 0
}

function brace (message) {
  console.log(`{${message}}`)
}

function squareBracket (message) {
  console.log(`[${message}]`)
}

function describe (message) {
  console.log('  ' + message)
}

function expect (result, expected) {
  const stringResult = JSON.stringify(result)
  const stringExpected = JSON.stringify(expected)
  if (stringResult === stringExpected) {
    // console.log('    Result & Expect: ' + stringExpected)
    console.log('    Pass')
    testsCount.pass++
  } else {
    console.log('    Result: ' + stringResult)
    console.log('    Expect: ' + stringExpected)
    console.log('    Fail')
    testsCount.fail++
  }
}

function summarize () {
  brace('Summary')
  console.log('  Pass: ' + testsCount.pass)
  console.log('  Fail: ' + testsCount.fail)
}

module.exports = {squareBracket, describe, expect, summarize}