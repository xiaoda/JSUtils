const express = require('express')
const router = express.Router()
const getWorkingHours = require('../core/date/working-hours')

/**
 * @api {get} /date/working-hours 计算工作时间
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
router.get('/working-hours', function(req, res, next) {
  let {startDateTime, endDateTime, countingPeriods} = req.query
  if (countingPeriods) countingPeriods = eval(countingPeriods)
  else countingPeriods = []
  const hours = getWorkingHours(startDateTime, endDateTime, countingPeriods)
  res.json({hours})
})

module.exports = router