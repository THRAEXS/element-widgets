import request from '@/utils/request'

function getUserList(query) {
  return request({
    url: '/api/admin/user/list',
    method: 'GET',
    params: query
  })
}

export { getUserList }
