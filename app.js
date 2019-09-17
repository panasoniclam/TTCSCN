const express =  require('express')
const app = express()
const readLine = require('readline') ;
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(bodyParser.json())
app.use(logger('dev'))
require('dotenv').config()
mongoose.connect(
    process.env.MONGO_LOCAL_CONN_URL,
    {
        useNewUrlParser:true
    },()=>console.log('connect mongodb success !')
)
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
const route_user = require('./app/routes/route.user')
app.use('/api/v1',route_user)
app.use(express.static("public")) ;
app.set("view engine","ejs") ;
app.set("views",'./views')
app.get('/',(rep,res)=>{
         res.render('index')
});
module.exports = app