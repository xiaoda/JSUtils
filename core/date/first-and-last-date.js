const Separator = '/'

function getFirstDateOfMonth(year, month) {
  const date = Number(year) + Separator + Number(month) + Separator + '1'
  return date
}

function getLastDateOfMonth(year, month) {
  let tempYear = Number(year)
  let tempMonth = Number(month) + 1
  if (tempMonth > 12) {
    tempYear += 1
    tempMonth = 1
  }
  const tempDateObj = new Date(tempYear + '/' + tempMonth + '/' + '1')
  const dateObj = new Date(Date.parse(tempDateObj) - 24 * 60 * 60 * 1000)
  const targetYear = dateObj.getFullYear()
  const targetMonth = dateObj.getMonth() + 1
  const targetDay = dateObj.getDate()
  const date = targetYear + Separator + targetMonth + Separator + targetDay
  return date
}

module.exports = {getFirstDateOfMonth, getLastDateOfMonth}