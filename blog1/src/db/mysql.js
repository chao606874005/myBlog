const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始链接
con.connect()

// 统一执行 sql 的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err)
                return
            }
            // JSON的格式化处理，解决：nodejs连接MySQL返回的数据有RowDataPacket问题
            var dataString = JSON.stringify(result);
            var dataParse = JSON.parse(dataString);

            resolve(dataParse)
        })
    })
    return promise
}

module.exports = {
    exec,
    escape: mysql.escape
}