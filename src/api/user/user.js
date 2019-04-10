import request from '@/request/axios'

export function getUserInfo(query) {
  return request({
    url: '/user/userInfo',
    method: 'get',
    params: query
  })
}
