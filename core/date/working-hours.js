const COUNTING_PERIODS = [{
  start: '9:00:00',
  duration: 3 * 60 * 60 // 3 hours
}, {
  start: '13:00:00',
  duration: 5 * 60 * 60 // 5 hours
}]

function getWorkingHours (startDateTime, endDateTime, countingPeriods = []) {
  const startTimestamp = new Date(startDateTime).getTime()
  const endTimestamp = new Date(endDateTime).getTime()
  const startDate = startDateTime.split(' ')[0]
  if (!countingPeriods.length) countingPeriods = COUNTING_PERIODS

  function getAccumulatedTime (countingPeriod) {
    const loopDateTime = startDate + ' ' + countingPeriod.start
    let loopTimestamp = new Date(loopDateTime).getTime()
    let accumulatedTime = 0
    for (i = 0; i < 999; i++) {
      if (loopTimestamp > endTimestamp) break
      if (loopTimestamp > startTimestamp) {
        let tempDuration = countingPeriod.duration * 1000
        let tempDurationLimit = endTimestamp - loopTimestamp
        if (tempDuration > tempDurationLimit) tempDuration = tempDurationLimit
        accumulatedTime += tempDuration
      } else if (loopTimestamp + countingPeriod.duration * 1000 > startTimestamp) {
        let tempDuration = loopTimestamp + countingPeriod.duration * 1000 - startTimestamp
        let tempDurationLimit = endTimestamp - startTimestamp
        if (tempDuration > tempDurationLimit) tempDuration = tempDurationLimit
        accumulatedTime += tempDuration
      }
      loopTimestamp += 24 * 60 * 60 * 1000 // 1 day
    }
    return accumulatedTime
  }

  const workingTime = countingPeriods
    .map(period => getAccumulatedTime(period))
    .reduce((total, current) => total + current)
  const seconds = workingTime / 1000
  const minutes = seconds / 60
  const hours = minutes / 60

  return hours
}

module.exports = getWorkingHours