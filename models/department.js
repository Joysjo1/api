const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DepartmentSchema = new Schema({

    
    deptId:Number,
    deptName:String,
    depSubject:[{
        sub1:String,
        sub2:String,
        sub3:String,
    }

]

});

var departmentData=mongoose.model('department',DepartmentSchema);
module.exports=departmentData;

