const express = require('express');
const router = express.Router();
const auth=require("../models/auth");
// const bcrypt = require('bcryptjs');


// REGISTER

router.post('/register',async  function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // const hashConPassword= await hashGenerate(req.body.confirmPassword)
    // console.log(req.body)
    // const salt = await bcrypt.genSaltSync(10);
    // const password = await req.body.password;
    // const hash = await bcrypt.hashSync(req.body.password, salt);
   ;
    var data1={
        email:req.body.email,
        // passWord:bcrypt.hashSync(password, salt),
        passWord:req.body.passWord,
        confirmPassword:req.body.confirmPassword,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        mobileNumber:req.body.mobileNumber
    }
  
    var dept = new auth (data1);
     dept.save();
    res.send({
        data:data1,
        status:"user credated",

    })
    
});

router.post('/register',async  function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    const user= auth.findOne({username:req.body.username});
})



module.exports=router;