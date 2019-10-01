const express = require('express') 
const app= express() ;
const mongoose = require('mongoose')
const bodyParser = require('body-parser') ;
const logger = require('morgan') ;
require('dotenv').config()
//route
const user_route = require('./routes/route.user')
mongoose.connect(
    process.env.MONGO_LOCAL_CONN_URL,
    {
        useNewUrlParser:true
    },()=>console.log('connect db success!')
)
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({
    extended:false
}))
app.use(logger('dev')) ;

app.use('/api/v1/',user_route);
app.use((req,res,next)=>{
    const err =  Error('not found');
    err.status = 404;
    next(err);
})
app.use((req,res,next)=>{
    const err = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;
    res.status(status).json({
        message:err.message
    })
})
module.exports = app;