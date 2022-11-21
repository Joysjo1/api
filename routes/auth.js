const express = require('express');
const router = express.Router();
const auth=require("../models/auth");

const {hashGenerate} = require('../helpers/helpers')


// REGISTER

router.post('/register', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const hashPassword=  hashGenerate(req.body.passWord)
    // const hashConPassword= await hashGenerate(req.body.confirmPassword)
    console.log(req.body)
    var data1={
        email:req.body.email,
        passWord:hashPassword,
        confirmPassword:req.body.confirmPassword,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        mobileNumber:req.body.mobileNumber
    }
  
    var dept = new auth (data1);
     dept.save();
    res.send({
        data:data,
        status:"user credated",

    })
    
});

module.exports=router;