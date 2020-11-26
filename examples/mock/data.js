import Mock from 'mockjs'
import { param2Obj } from '@/utils/util'
import logger from '../utils/logger'

const Random = Mock.Random

const total = 3157
let users = []
let maps = new Map()

for (let i = 0; i < total; i++) {
  const user = {
    id: `user-${i}`,
    account: `hanzo-${i+1}`,
    name: Random.name(),
    department: 'Peking University Thrid Hospital',
    office: 'Dental'
  }
  users.push(user)
  maps.set(user.id, user)
}

function getUserPage(options) {
  logger.debug('getUserPage:', options)
  const params = param2Obj(options.url)
  logger.debug('getUserPage params:', params)
  
  const { page, size } = params

  return {
    data: users.slice((page - 1) * size, page * size),
    total
  }
}

function getUser(options) {
  logger.debug('getUser:', options)
  const [id] = options.url.split('/').reverse()
  logger.debug('getUser params:', id)

  return maps.get(id) || {}
}

function getUsers(options) {
  logger.debug('getUsers:', options)
  const params = param2Obj(options.url)
  logger.debug('getUsers params:', params)
  
  return params.ids.map(it => maps.get(it)).filter(it => it)
}

export default { getUserPage, getUser, getUsers }
