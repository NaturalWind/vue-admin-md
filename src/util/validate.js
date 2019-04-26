/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s)
}

/**
 * 判断是否为空
 * @param {*} value
 */
export function validateNull (value) {
  if (typeof value === 'boolean') {
    return false
  }
  if (typeof value === 'number') {
    return false
  }
  if (value instanceof Array) {
    if (value.length === 0) {
      return true
    }
  } else if (value instanceof Object) {
    if (JSON.stringify(value) === '{}') {
      return true
    }
  } else {
    if (value === 'null' ||
        value === null ||
        value === 'undefined' ||
        value === undefined ||
        value === '') {
      return true
    }
    return false
  }
  return false
}
