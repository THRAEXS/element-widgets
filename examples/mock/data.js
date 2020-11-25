import Mock from 'mockjs'

const Random = Mock.Random // Mock.Random 是一个工具类，用于生成各种随机数据

let userList = [] // 用于接受生成数据的数组
for (let i = 0; i < 10; i++) { // 可自定义生成的个数
    let template = {
        'id': Random.string(2, 10), // 生成2到10个字符之间的字符串
        'name': Random.name(), // 生成姓名
        'deptName': Random.url(), // 生成web地址
        'officeName': Random.province() // 生成地址
    }
    userList.push(template)
}

export { userList }
