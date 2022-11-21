const express = require('express');
const router = express.Router();
const auth=require("../models/auth");


// REGISTER

router.post('/register',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body)
    var data=req.body
  
    var dept = new auth (data);
    dept.save();
    res.send({
        data:data,
        status:"user credated",

    })
    
});

module.exports=router;