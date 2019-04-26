import { validateNull } from './validate'

const keyName = 'md' + '-'

/**
 * 存储 storage
 */
export const setStorage = (parameter = {}) => {
  let { name, content, type } = parameter
  name = keyName + name
  let obj = {
    dataType: typeof (content),
    content: content,
    type: type,
    dateTime: new Date().getTime()
  }
  if (type === 'session') {
    window.sessionStorage.setItem(name, JSON.stringify(obj))
  } else {
    window.localStorage.setItem(name, JSON.stringify(obj))
  }
}

/**
 * 获取 storage
 */
export const getStorage = (parameter = {}) => {
  let { name, type } = parameter
  name = keyName + name
  let obj = {}, content
  if (type === 'session') {
    let sessionObj = window.sessionStorage.getItem(name)
    obj = validateNull(sessionObj) ? {} : JSON.parse(sessionObj)
  } else {
    let localObj = window.localStorage.getItem(name)
    obj = validateNull(localObj) ? {} : JSON.parse(localObj)
  }
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = eval(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content || ''
}

/**
 * 删除 storage
 */
export const removeStorage = (parameter = {}) => {
  let { name, type } = parameter
  name = keyName + name
  if (type === 'session') {
    window.sessionStorage.removeItem(name)
  } else {
    window.localStorage.removeItem(name)
  }
}

/**
 * 清空 storage
 */
export const clearStorage = (parameter = {}) => {
  let { type } = parameter
  if (type === 'session') {
    window.sessionStorage.clear()
  } else {
    window.localStorage.clear()
  }
}
