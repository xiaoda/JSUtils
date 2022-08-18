const Division = {
  600: '凌晨',
  1300: '上午',
  2400: '下午'
}

function getPartOfDay (dateTime, division = {}) {
  dateTime = dateTime.trim()
  if (dateTime.split(' ').length === 1) dateTime = '2/2/2 ' + dateTime
  if (dateTime.split(':').length === 2) dateTime += ':00'
  const formatedTime = Number(dateTime.split(' ')[1].replace(/:/g, '')) / 100
  if (!Object.keys(division).length) division = Division
  let part
  for (threshold in Division) {
    if (formatedTime <= threshold) {
      part = Division[threshold]
      break
    }
  }
  return part
}

module.exports = {getPartOfDay}