// import Mock from 'mockjs'
import { param2Obj } from './utils'

// const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

// let userList = [] // 用于接受生成数据的数组
// for (let i = 0; i < 10; i++) { // 可自定义生成的个数
//     let template = {
//         'id': Random.string(2, 10), // 生成2到10个字符之间的字符串
//         'name': Random.name(), // 生成姓名
//         'deptName': Random.url(), // 生成web地址
//         'officeName': Random.province() // 生成地址
//     }
//     userList.push(template)
// }

function getUserPage(options) {
  console.log('getUserPage:', options)
  const params = param2Obj(options.url)
  console.log('getUserPage params:', params)
  return []
}

function getUser(options) {
  console.log('getUser:', options)
  const [id] = options.url.split('/').reverse()
  console.log('getUser params:', id)

  return {}
}

function getUsers(options) {
  console.log('getUsers:', options)
  const params = param2Obj(options.url)
  console.log('getUsers params:', params)
  return []
}

export default { getUserPage, getUser, getUsers }
