const express = require('express')
const router = express.Router()
const {getWorkingHours} = require('../core/date/working-hours')
const {getFirstDateOfMonth, getLastDateOfMonth} = require('../core/date/first-and-last-date')

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

module.exports = router