const mongoose = require('mongoose') ;
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema ;
const userSchema = new Schema({
    email:{
        type:'String',
        trim:true,
        unique:true,
        required:true
    },
    hash:{
        type:'String',
        required:true,
        unique:true
    }
})
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified || !user.isNew) { // don't rehash if it's an old user
        next();
    } else {
        bcrypt.hash(user.hash, 10, function (err, hash) {
            if (err) {
                console.log('Error hashing password for user', user.name);
                next(err);
            } else {
                user.hash = hash;
                next();
            }
        });
    }
});

const user = mongoose.model('user',userSchema)
module.exports = user