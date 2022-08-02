const express = require('express')
const router = express.Router()
const getWorkingHours = require('../core/date/working-hours')

router.get('/working-hours', function(req, res, next) {
  let {startDateTime, endDateTime, countingPeriods} = req.query
  if (countingPeriods) countingPeriods = eval(countingPeriods)
  else countingPeriods = []
  const {hours} = getWorkingHours(startDateTime, endDateTime, countingPeriods)
  res.json({hours})
})

module.exports = router