import request from '@/request/axios'

export function getMenu(query) {
  return request({
    url: '/user/menu',
    method: 'get',
    params: query
  })
}
