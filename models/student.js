const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://adminjo12:admin12345@joysundaran012.fydaekf.mongodb.net/studentPortal",(req,res)=>{
//     // console.log(res);
// });

const Schema = mongoose.Schema;
const StudentSchema = new Schema({

    
    email:String,
    age:Number,
    username:String,
    

});

var Studentdata = mongoose.model('studentProfile' , StudentSchema)
module.exports =Studentdata