import request from '@/request/axios'

export function loginByUsername(parameter) {
  return request({
    url: '/user/login',
    method: 'post',
    data: parameter
  })
}
