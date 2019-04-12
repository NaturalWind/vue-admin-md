import request from '@/request/axios'

export function getUserInfoApi(query) {
  return request({
    url: '/user/userInfo',
    method: 'get',
    params: query
  })
}
