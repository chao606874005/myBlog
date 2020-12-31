## 项目步骤 
1、cd blog1
2、npm init -y
3、配置： node bin/www.js
4、package配置dev：npm run dev启动
5、nodemon监测文件自动更新
6、 process.env.NODE_ENV：可用于判断环境，配置数据库、日志等

## 测试get接口：
1、http://localhost:8000/api/blog/list
2、http://localhost:8000/api/blog/detail?id=1
## Postman测试post接口(postman body选raw)
1、http://localhost:8000/api/blog/new  (参数：title,content)
2、http://localhost:8000/api/blog/update?id=12  (参数：title或content)
3、http://localhost:8000/api/blog/del?id=12 （参数：无）

http://localhost:8000/api/user/login  (参数：username或password)
## 层级
1、第一层：node bin/www.js ----> createServer
2、app.js ----> 系统基本设置：系统功能、信息的配置
3、router ----> 处理路由
4、controller ----> 处理数据

## 接口顺序（blog为例）：
1、app.js：命中路由到router/blog.js
2、router/blog.js调用controller/blog.js查询mysql结果
3、app.js中res.end结果
