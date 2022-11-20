const express = require('express')
const app = express();
const mongoose = require("mongoose");
const multer  = require('multer');
var url = require('url');
mongoose.connect("mongodb+srv://adminjo12:admin12345@joysundaran012.fydaekf.mongodb.net/studentPortal",(req,res)=>{
    // console.log(res);
});
const bodyParser = require('body-parser')
const routeEmployee=require("./routes/student");
const routeDept=require("./routes/departments");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
const upload = multer({ dest: './public/uploads' })
app.post('/', upload.single('uploaded_file'), function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log(req.file, req.body)
 });

// parse application/json
app.use(bodyParser.json())


app.use("/api/v1/",routeEmployee);
app.use("/api/v1/",routeDept);

let PORT =3000
app.listen(PORT,()=>{
    console.log(`local host running ${PORT}`);
})