const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
    console.log('username==',username)
    username = escape(username)
    
    // 生成加密密码
    password = genPassword(password)
    password = escape(password)
    console.log('username=',username,'password=',password)
    const sql = `
        select username, realname from users where username=${username} and password=${password}
    `
    // console.log('sql is', sql)
    return exec(sql).then(rows => {
        console.log('exec-rows',rows)
        return rows[0] || {}
    })
}

module.exports = {
    login
}