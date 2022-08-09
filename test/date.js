const assert = require('assert')
const getWorkingHours = require('../core/date/working-hours')

describe('Date', _ => {
  describe('#getWorkingHours', _ => {
    it('1 day has 8 working hours', _ => {
      assert.equal(
        getWorkingHours('2022/8/1 00:00:00', '2022/8/1 23:59:59'), 8
      )
    })
  })
})