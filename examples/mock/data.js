import Mock from 'mockjs'
import { param2Obj } from '@/utils/util'
import logger from '../utils/logger'

const Random = Mock.Random

const debug = false

/* ************* User ************* */
const total = 3157
let users = []
let maps = new Map()

for (let i = 0; i < total; i++) {
  const user = {
    id: `user-${i}`,
    account: `hanzo-${i + 1}`,
    name: Random.name(),
    department: 'Peking University Thrid Hospital',
    office: 'Dental',
    remark: Random.paragraph()
  }
  users.push(user)
  maps.set(user.id, user)
}

function getUserPage(options) {
  debug && logger.debug('getUserPage:', options)
  const params = param2Obj(options.url)
  debug && logger.debug('getUserPage params:', params)
  
  const { page, size } = params

  return {
    data: users.slice((page - 1) * size, page * size),
    total
  }
}

function getUser(options) {
  debug && logger.debug('getUser:', options)
  const [id] = options.url.split('/').reverse()
  debug && logger.debug('getUser params:', id)

  return maps.get(id) || {}
}

function getUsers(options) {
  debug && logger.debug('getUsers:', options)
  const params = param2Obj(options.url)
  debug && logger.debug('getUsers params:', params)
  
  return params.ids.map(it => maps.get(it)).filter(it => it)
}

/* ************* Org ************* */
let orgList = []

for (let i = 0; i < 5; i++) {
  const college = {
    id: `org-${i}`,
    name: `中国天地银行-${i + 1}`,
    code: `COLLEGE-${i + 1}`,
    parentId: null,
    level: 1,
    remark: Random.paragraph(1),
  }
  orgList.push(college)

  Random.range(Random.integer(10, 60)).forEach(j => {
    const dept = {
      id: `${college.id}-${j}`,
      name: `中国天地银行-${i}-${j}分行`,
      code: `DEPARTMENT-${i}-${j}`,
      parentId: college.id,
      level: 2,
      remark: Random.paragraph(1),
    }
    orgList.push(dept)

    Random.range(Random.integer(5, 20)).forEach(k => {
      const office = {
        id: `${dept.id}-${k}`,
        name: `Office-${i}-${j}-${k}`,
        code: `OFFICE-${i}-${j}-${k}`,
        parentId: dept.id,
        level: 3,
        remark: Random.paragraph(1),
      }
      orgList.push(office)
    })
  }) 
}

function getOrgTree(options) {
  debug && logger.debug('getOrgTree:', options)
  const [lev] = options.url.split('/').reverse()
  const level = Number.parseInt(lev)
  debug && logger.debug('getOrgTree params:', level)

  const colleges = orgList.filter(it => it.level === 1)

  if (level > 1) {
    const depts = orgList.filter(it => it.level === 2)

    depts.forEach(d => {
      const parent = colleges.find(c => c.id === d.parentId)

      !parent.children && (parent.children = [])
      parent.children.push(d)
    })

    if (level > 2) {
      const offices = orgList.filter(it => it.level === 3)
      offices.forEach(o => {
        const parent = depts.find(d => d.id === o.parentId)

        !parent.children && (parent.children = [])
        parent.children.push(o)
      })
    }
  }

  return colleges
}

export default {
  getUserPage,
  getUser,
  getUsers,
  getOrgTree
}
