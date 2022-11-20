const express = require('express');
const router = express.Router();
const student=require("../models/student")
// GET
router.get('/employee',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // var array=[
    //     {name:"joy",age:25,details:[{dept:"mech"}],rollNo:12},
    //     {name:"jobin",age:25,details:[{dept:"cvil"}],rollNo:11},
    //     {name:"jobi",age:21,details:[{dept:"science"}],rollNo:15},
    //     {name:"johny",age:27,details:[{dept:"histroy"}],rollNo:1}    
    // ]
    // res.send({
    //     data:array,
    //     status:array.length==0?false:true
    // })
    student.find().then((value)=>{
        res.send({
            data:value,
            message:"value get"
        });
    })
});
// GET BY id
router.get('/employee/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var id=req.params.id
    console.log(id);
    student.findById({_id:id}).then((value)=>{
        console.log(value);
        if(value===null){
            res.send({
                data:value,
                massage:"some error"
            });
        }else{
            res.send({
                data:value,
                massage:"sucess"
            });

        }
    })
});

// POST 
router.post('/addemployee',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body)
    var data={
        username:req.body.username,
        email:req.body.email,
        age:req.body.age
    }
  
    var user = new student (data);
    user.save();
    res.send({
        data:data,
        status:"success",

    })
    
});

// UPDATE
 router.put('/updateemployee', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
   var data1= {
    "email":req.body.email,
    "username":req.body.username,
    "age":req.body.age
   }
    id=req.body._id
    // email=req.body.email,
    // username=req.body.username,
    // age=req.body.age
    console.log(data1)
 student.findByIdAndUpdate({_id:id},{$set:data1}).then((value)=>{
    res.send(value);
  })
    
    //     userlogin.findByIdAndUpdate({_id:id},{$set:{
    //         "email":email,
    //         "password":password
    //     }}
    //     ).then((data)=>{
    //         console.log(data)
    //         res.send(data)
            
    //     })
    
});

// DELETE
router.delete('/employee/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var id=req.params.id
    console.log(id);
    student.findByIdAndDelete({_id:id}).then((value)=>{
        res.send({
            meassage:"delete sucessfully"
        })

   
    })
});




module.exports=router;