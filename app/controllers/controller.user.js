const User = require('./../model/model.user') ; 
module.exports = {
    getAll:(req,res,next)=>{
        res.status(200).json({
            message:"djdjdjdjfhflssld"
        })
    },
    createUSer: async (req,res,next)=>{
        const user = new User({
            email:req.body.email,hash:req.body.password
        })
        await user.save((err,user)=>{
            let result = {} ;
            let status = 201 ;
            if(!err){
                result.status = status;
                result.result = user;
            }else{
                status = 500 ;
                result.status = status ;
                result.result = err
            }
            res.status(status).send(result);
        })
             
    }
}