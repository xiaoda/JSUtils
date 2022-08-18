const testsCount = {
  pass: 0,
  fail: 0
}

function h1 (message) {
  console.log(`{${message}}`)
}

function h2 (message) {
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
  h1('Summary')
  console.log('  Pass: ' + testsCount.pass)
  console.log('  Fail: ' + testsCount.fail)
}

module.exports = {h2, describe, expect, summarize}