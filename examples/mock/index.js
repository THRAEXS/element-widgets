import Mock from 'mockjs'

// import { userList } from './data'

// Mock.mock('/api/admin/user/list', 'get', userList)
// Mock.mock(/\/api\/admin\/user\/list*/, 'get', function(options) {
Mock.mock(new RegExp('/api/admin/user/list'), 'get', function(options) {
    console.log(options)
    return []
})
