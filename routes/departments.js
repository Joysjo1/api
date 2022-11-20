const express = require('express');
const router = express.Router();
const department=require("../models/department")

// GET
router.get('/departments',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    department.find().then((value)=>{
        res.send({
            data:value,
            status:value== null ? false:true ,
            message:"sucess fully "
        })
    })

});

// GET by id
router.get('/departments/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var id = req.params.id
    department.findById({_id:id}).then((value)=>{
        res.send({
            data:value,
            message:"sucess fully "
        })
    })

});

// GET depatment Name
router.get('/department',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    // console.log(req.query);
    // var deptname=req.params.deptName
    // var query = {};
    // query['deptName'] = deptname;
    department.findOne(req.query).then((value)=>{
        res.send({
            data:value==null?null:value,
            message:"sucess fully "
        })
    })

});

// POST

router.post('/addepartments',function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    console.log(req.body)
    var data=req.body
  
    var dept = new department (data);
    dept.save();
    res.send({
        data:data,
        status:"success",

    })
    
});

// DELETE
router.delete('/departments/:id',(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    var id=req.params.id
    department.findByIdAndDelete({_id:id}).then((value)=>{
        res.send({
            data:value,
            message:" delete sucess fully "
        })
    })

});

// UPDATE
 router.put('/editdepartments',async  function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    id=req.body._id
    // console.log(req.body.depSubject.map(res=>res.sub1)[0]);
    var editData={
        "deptId":req.body.deptId,
        "deptName":req.body.deptName,
        "depSubject": [
          {
            "sub1": req.body.depSubject.map(res=>res.sub1)[0],
            "sub2":req.body.depSubject.map(res=>res.sub2)[0],
          }
        ],
    }
awaidepartment.findByIdAndUpdate({_id:id},{$set:editData}).then((value)=>{
    res.send(value)
})
  

    
});




module.exports=router;