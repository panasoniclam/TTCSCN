const app = require('./backend/app') ;
const server = require('http').Server(app)
require('dotenv').config() ;
const port = process.env.PORT ;
server.listen(port,()=>console.log('connect server success!'))
module.exports = server