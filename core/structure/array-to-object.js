function arrayToObject (array, fields) {
  const object = {}
  const keyIndex = fields.indexOf('key')
  array.forEach(innerArray => {
    const key = innerArray[keyIndex]
    object[key] = {}
    innerArray.forEach((item, index) => {
      if (index === keyIndex) return
      object[key][fields[index]] = item
    })
  })
  return object
}

module.exports = {arrayToObject}