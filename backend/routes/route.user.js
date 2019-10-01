const express = require('express')
const app = express.Router ;
app.get('/user/',(req,res,next)=>{
    return res.status(200).send({
        message:"djdjdjdjj"
    })
})


module.exports = app;