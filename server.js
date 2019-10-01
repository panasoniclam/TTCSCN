// const app = require('./app')
// const server = require('http').Server(app)
// require('dotenv').config()
// server.listen(process.env.PORT,()=>{
//     console.log(`port running ${process.env.PORT}`)
// })
const express = require('express');
const app = express();
const server = require('http').Server(app)

const jwt = require('jsonwebtoken');
app.get('/api/v1/getall',verifyToken,(req,res,next)=>{
    jwt.verify(req.token,'secretkey',(err,authdata)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.status(200).send({
                authdata
            })
        }
    })
})
app.post('/api/v1/login',(req,res,next)=>{
    const user = {
        id:1,
        email:'lamnn ',
        username:'lamnn'
    }
    jwt.sign({user:user},'secretkey',(err,token)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.status(200).send({
                token
            })
        }
    })
})
function verifyToken(req,res,next){
    const authorizationHeader = req.headers['authorization'] ;
    if(authorizationHeader!==undefined){
        const bearerToken = authorizationHeader.split(' ');
        const token  = bearerToken[1];
        req.token = token;
        next();
    }else{
        res.sendStatus(403);
    }
}
server.listen(8080,()=>console.log('server running port 8080'));