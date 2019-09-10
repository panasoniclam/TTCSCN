const express =  require('express')
const app = express()
const readLine = require('readline') ;
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

app.use(express.static("public")) ;
app.set("view engine","ejs") ;
app.set("views",'./views')
app.get('/',(rep,res)=>{
    
         res.render('boostrapColumn')
     
});
module.exports = app