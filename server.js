const app = require('./app')
const server = require('http').Server(app)
server.listen(3000,()=>{
    console.log('port running 3000')
})