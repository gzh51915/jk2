const express = require('express') // commonJS
const routers = require('./router')

// 启动一个服务器
const app = express()

// 静态资源服务器 appache
app.use(express.static('./'))

app.use('/api',routers)


// 监听端口：2**16
app.listen(1915,()=>{
    console.log('server is runing')
})