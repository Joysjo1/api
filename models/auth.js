const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const userSchema = new Schema({
    email:String,
    passWord:String,
    confirmPassword:String,
    firstName:String,
    lastName:String,
    userName:String,
    mobileNumber:Number
    

});

var auth = mongoose.model('userData' , userSchema)
module.exports =auth;