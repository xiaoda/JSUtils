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
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "hours": 8
 *     }
 */
router.get('/working-hours', (req, res, next) => {
  let {startDateTime, endDateTime, countingPeriods} = req.query
  if (countingPeriods) countingPeriods = eval(countingPeriods)
  else countingPeriods = []
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
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "date": "2022/8/1"
 *     }
 */
router.get('/first-date-of-month', (req, res, next) => {
  const {year, month} = req.query
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
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "date": "2022/8/31"
 *     }
 */
router.get('/last-date-of-month', (req, res, next) => {
  const {year, month} = req.query
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
 * 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "part": "上午"
 *     }
 */
router.get('/part-of-day', (req, res, next) => {
  let {dateTime, division} = req.query
  if (division) division = eval(division)
  else division = {}
  const part = getPartOfDay(dateTime, division)
  res.json({part})
})

module.exports = router