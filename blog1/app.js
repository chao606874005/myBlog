const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
  console.log('d.toGMTString() is ', d.toGMTString())
  return d.toGMTString()
}

// 用于处理 post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
      if (req.method !== 'POST') {
          resolve({})
          return
      }
      console.log('req.headers',req.headers['content-type'])
      if (req.headers['content-type'] !== 'application/json') {
          resolve({})
          return
      }
      let postData = ''
      req.on('data', chunk => {
          postData += chunk.toString()
      })
      console.log('postData', postData)
      req.on('end', () => {
          if (!postData) {
              resolve({})
              return
          }
          resolve(
              JSON.parse(postData)
          )
      })
  })
  return promise
}
      
const serverHandle = (req, res) => {
  // 设置返回格式 JSON
  res.setHeader('Content-type', 'application/json')
  // 获取 path
  const url = req.url
  req.path = url.split('?')[0]

  // 解析 query
  req.query = querystring.parse(url.split('?')[1])
  // 处理postData
  getPostData(req).then(postData =>{
    req.postData = postData
    req.body = postData
    // 处理blog路由
    // const blogData = handleBlogRouter(req, res)
    // if(blogData) {
    //   console.log('app.js-blogData=',JSON.stringify(blogData))
    //   res.end(
    //     JSON.stringify(blogData)
    //   )
    //   return
    // }
    const blogResult = handleBlogRouter(req, res)
    // console.log('blogResult',blogResult.then)
    if (blogResult && blogResult.then) {
        blogResult.then(blogData => {
            // if (needSetCookie) {
            //     res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
            // }
            res.end(
                JSON.stringify(blogData)
            )
        })
        return
    }

    if(blogResult) {
      res.end(
        JSON.stringify(blogResult)
      )
      return
    }

    // 处理user路由
    // const userData = handleUserRouter(req, res)
    // if(userData) {
    //   console.log('app.js-userData=',JSON.stringify(userData))
    //   res.end(
    //     JSON.stringify(userData)
    //   )
    //   return
    // }

    const userResult = handleUserRouter(req, res)
    if (userResult) {
        userResult.then(userData => {
            // if (needSetCookie) {
            //     res.setHeader('Set-Cookie', `userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
            // }

            res.end(
                JSON.stringify(userData)
            )
        })
        return
    }
    // 未命中路由，返回 404
    res.writeHead(404, {"Content-type": "text/plain"})
    res.write("404 Not Found\n")
    res.end()
  })  
}

module.exports = serverHandle