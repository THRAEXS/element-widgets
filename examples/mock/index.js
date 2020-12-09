import Mock from 'mockjs'
import data from './data'
import orgs from './orgs'

const mocks = [
    { url: '/api/admin/user/page', type: 'get', template: data.getUserPage },
    { url: '/api/admin/user/', type: 'get', template: data.getUser },
    { url: '/api/admin/user', type: 'get', template: data.getUsers },
    { url: '/api/admin/org/tree', type: 'get', template: orgs.enabled },
]

mocks.forEach(it => Mock.mock(new RegExp(it.url), it.type, it.template))
