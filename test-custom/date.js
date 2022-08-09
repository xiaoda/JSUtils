const {squareBracket, describe, expect} = require('./module')
const getWorkingHours = require('../core/date/working-hours')

function testingGetWorkingHours () {
  squareBracket('getWorkingHours')

  describe('There should be 8 working hours in 1 day')
  expect(getWorkingHours('2022/8/1 00:00:00', '2022/8/1 23:59:59'), 8)

  describe('There should be 3 working hours before noon')
  expect(getWorkingHours('2022/8/1 00:00:00', '2022/8/1 12:00:00'), 3)

  describe('There should be 5 working hours after noon')
  expect(getWorkingHours('2022/8/1 12:00:00', '2022/8/1 23:59:59'), 5)

  describe('There should be 16 working hours in 2 days')
  expect(getWorkingHours('2022/8/1 00:00:00', '2022/8/2 23:59:59'), 16)

  describe('There should be 1.5 working hours between 6:00 & 10:30')
  expect(getWorkingHours('2022/8/1 6:00:00', '2022/8/1 10:30:00'), 1.5)

  describe('There should be 1 working hours between 11:30 & 13:30')
  expect(getWorkingHours('2022/8/1 11:30:00', '2022/8/1 13:30:00'), 1)

  describe('There should be 1.5 working hours between 16:30 & 22:00')
  expect(getWorkingHours('2022/8/1 16:30:00', '2022/8/1 22:00:00'), 1.5)

  describe('There should be 3 working hours between 16:30 & 10:30 next morning')
  expect(getWorkingHours('2022/8/1 16:30:00', '2022/8/2 10:30:00'), 3)
}

module.exports = {testingGetWorkingHours}