const express = require('express')
const router = express.Router()
const {getWorkingHours} = require('../core/date/working-hours')
const {getFirstDateOfMonth, getLastDateOfMonth} = require('../core/date/first-and-last-date')
const {getPartOfDay} = require('../core/date/part-of-day')

/**
 * @api {get} /date/working-hours 计算工作时间
 * @apiName workingHours
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/working-hours.js)
 * @apiGroup Date
 * 
 * @apiQuery {String} startDateTime 开始日期时间
 * @apiQuery {String} endDateTime 结束日期时间
 * @apiQuery {Array} [countingPeriods] 自定义上下班时间
 */
router.get('/working-hours', (req, res, next) => {
  let {startDateTime, endDateTime, countingPeriods} = req.query
  if (countingPeriods) countingPeriods = eval(countingPeriods)
  else countingPeriods = []
  const hours = getWorkingHours(startDateTime, endDateTime, countingPeriods)
  res.send(String(hours))
})


/**
 * @api {post} /date/working-hours 计算工作时间（Post）
 * @apiName workingHoursPost
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/working-hours.js)
 * @apiGroup Date
 * 
 * @apiBody {String} startDateTime 开始日期时间
 * @apiBody {String} endDateTime 结束日期时间
 * @apiBody {Array} [countingPeriods] 自定义上下班时间
 */
router.post('/working-hours', (req, res, next) => {
  let {startDateTime, endDateTime, countingPeriods} = req.body
  if (!countingPeriods) countingPeriods = []
  const hours = getWorkingHours(startDateTime, endDateTime, countingPeriods)
  res.json({hours})
})

/**
 * @api {get} /date/first-date-of-month 获取某个月第一天的日期
 * @apiName firstDateOfMonth
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/first-and-last-date.js)
 * @apiGroup Date
 * 
 * @apiQuery {Number} year 年
 * @apiQuery {Number} month 月
 */
router.get('/first-date-of-month', (req, res, next) => {
  const {year, month} = req.query
  const date = getFirstDateOfMonth(year, month)
  res.send(date)
})

/**
 * @api {post} /date/first-date-of-month 获取某个月第一天的日期（Post）
 * @apiName firstDateOfMonthPost
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/first-and-last-date.js)
 * @apiGroup Date
 * 
 * @apiBody {Number} year 年
 * @apiBody {Number} month 月
 */
router.post('/first-date-of-month', (req, res, next) => {
  const {year, month} = req.body
  const date = getFirstDateOfMonth(year, month)
  res.json({date})
})

/**
 * @api {get} /date/last-date-of-month 获取某个月最后一天的日期
 * @apiName lastDateOfMonth
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/first-and-last-date.js)
 * @apiGroup Date
 * 
 * @apiQuery {Number} year 年
 * @apiQuery {Number} month 月
 */
router.get('/last-date-of-month', (req, res, next) => {
  const {year, month} = req.query
  const date = getLastDateOfMonth(year, month)
  res.send(date)
})

/**
 * @api {post} /date/last-date-of-month 获取某个月最后一天的日期（Post）
 * @apiName lastDateOfMonthPost
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/first-and-last-date.js)
 * @apiGroup Date
 * 
 * @apiBody {Number} year 年
 * @apiBody {Number} month 月
 */
router.post('/last-date-of-month', (req, res, next) => {
  const {year, month} = req.body
  const date = getLastDateOfMonth(year, month)
  res.json({date})
})

/**
 * @api {get} /date/part-of-day 获取当天时间对应的部分
 * @apiName partOfDay
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/part-of-day.js)
 * @apiGroup Date
 * 
 * @apiQuery {String} dateTime 日期时间
 * @apiQuery {Object} [division] 自定义时间对应关系
 */
router.get('/part-of-day', (req, res, next) => {
  let {dateTime, division} = req.query
  if (division) division = eval(division)
  else division = {}
  const part = getPartOfDay(dateTime, division)
  res.send(part)
})

/**
 * @api {post} /date/part-of-day 获取当天时间对应的部分（Post）
 * @apiName partOfDayPost
 * @apiDescription [Source code↗](https://github.com/xiaoda/JSUtils/blob/master/core/date/part-of-day.js)
 * @apiGroup Date
 * 
 * @apiBody {String} dateTime 日期时间
 * @apiBody {Object} [division] 自定义时间对应关系
 */
router.post('/part-of-day', (req, res, next) => {
  let {dateTime, division} = req.body
  if (!division) division = {}
  const part = getPartOfDay(dateTime, division)
  res.json({part})
})

module.exports = router