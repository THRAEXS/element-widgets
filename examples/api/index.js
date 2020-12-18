import request from '@/utils/request'
import qs from 'qs'

function getUserPage(params) {
  return request({
    url: '/api/admin/user/page',
    method: 'GET',
    params,
    // { indices: false, allowDots: false }
    paramsSerializer: p => qs.stringify(p)
  })
}

function getUser(id) {
  return request({
    url: `/api/admin/user/${id}`,
    method: 'GET'
  })
}

function getUsers(ids) {
  return request({
    url: '/api/admin/user',
    method: 'GET',
    params: { ids }
  })
}

function getOrgTree(level = 2) {
  return request({
    url: `/api/admin/org/tree/${level}`,
    method: 'GET'
  })
}

export {
  getUserPage,
  getUser,
  getUsers,
  getOrgTree
}
