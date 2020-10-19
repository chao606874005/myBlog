const http = require('http')
const PORT = 8000

const serveHandle = require('../app')
const serve = http.createServer(serveHandle)
serve.listen(PORT)
