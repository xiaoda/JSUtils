const {h2, describe, expect} = require('./module')
const {arrayToObject} = require('../core/structure/array-to-object')

function testingaArrayToObject () {
  h2('arrayToObject')

  describe('Array should be transformed to object')
  {
    const array = [['美元', 100], ['欧元', 90]]
    const fields = ['key', '买入价']
    expect(
      arrayToObject(array, fields),
      {"美元":{"买入价":100},"欧元":{"买入价":90}}
    )
  }
}

module.exports = {testingaArrayToObject}