const { 
  login
 } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method // GET POST
    console.log('user-router-req.method',req.method)
    console.log('user-router-req.body',req.body)
    // 登录
    if (method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const result = login(username, password)
        // const result = login('123', '456')
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter
