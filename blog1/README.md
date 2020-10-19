## cd blog1
## npm init -y

## 未配置： node bin/www.js
## package配置dev：npm run dev启动

## nodemon监测文件自动更新
## process.env.NODE_ENV：可用于判断环境，配置数据库、日志等

## 测试get接口：
## http://localhost:8000/api/blog/list
## http://localhost:8000/api/blog/detail

## ## Postman测试post接口
## http://localhost:8000/api/blog/new
## http://localhost:8000/api/blog/update
## http://localhost:8000/api/blog/del

## 层级
## 第一层：node bin/www.js ----> createServer
## app.js ----> 系统基本设置：系统功能、信息的配置
## router ----> 处理路由
## controller ----> 处理数据
