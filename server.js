const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  pathname = path.join('.', pathname)
  console.log('pathname', pathname)
  const realPathname = path.join(pathname, 'index.html')
  console.log('realPathname', realPathname)
  fs.readFile(realPathname, (err, file)=>{
    if(err) {
     res.writeHead(404)
     res.end('找不到相关文件。--')
     return
    }
    res.writeHead(200)
    res.end(file)
  })
}).listen(8082)
console.log('server run in port 8082')