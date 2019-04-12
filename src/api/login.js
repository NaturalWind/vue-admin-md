import request from '@/request/axios'

export function loginByUsernameApi(parameter) {
  return request({
    url: '/user/login',
    method: 'post',
    data: parameter
  })
}
