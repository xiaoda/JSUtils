const {squareBracket, describe, expect} = require('./module')
const {getWorkingHours} = require('../core/date/working-hours')
const {getFirstDateOfMonth, getLastDateOfMonth} = require('../core/date/first-and-last-date')

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

function testingGetFirstDateOfMonth () {
  squareBracket('getFirstDateOfMonth')

  describe('The first date of 2022/8 should be 2022/8/1')
  expect(getFirstDateOfMonth(2022, 8), '2022/8/1')

  describe('The first date of 2022/9 should be 2022/9/1')
  expect(getFirstDateOfMonth(2022, 9), '2022/9/1')

  describe('It should work if string value presented')
  expect(getFirstDateOfMonth('2022', '8'), '2022/8/1')
}

function testingGetLastDateOfMonth () {
  squareBracket('getLastDateOfMonth')

  describe('The last date of 2022/8 should be 2022/8/31')
  expect(getLastDateOfMonth(2022, 8), '2022/8/31')

  describe('The last date of 2022/9 should be 2022/9/30')
  expect(getLastDateOfMonth(2022, 9), '2022/9/30')

  describe('It should work if string value presented')
  expect(getLastDateOfMonth('2022', '8'), '2022/8/31')
}

module.exports = {
  testingGetWorkingHours,
  testingGetFirstDateOfMonth,
  testingGetLastDateOfMonth
}