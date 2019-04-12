import request from '@/request/axios'

export function getMenuApi(query) {
  return request({
    url: '/user/menu',
    method: 'get',
    params: query
  })
}
