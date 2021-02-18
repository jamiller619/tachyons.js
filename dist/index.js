const tachyons = require('./tachyons.css.json')

const findClassName = (className) => {
  const found = tachyons[className]

  if (found != null) {
    return found
  }

  if (found !== '' && className != '') {
    console.warn(`"${className}" is not a valid Tachyons class.`)
  }

  return ''
}

module.exports = (classNamesProp) => {
  const classNames = Array.isArray(classNamesProp)
    ? classNamesProp
    : classNamesProp.split(' ')

  return classNames.map(findClassName).join(' ')
}
