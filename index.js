const express = require('express')
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const multer  = require('multer');
const  dotenv=require("dotenv");
dotenv.config()
var url = require('url');
app.use(cors());
mongoose.connect(process.env.MONGODB_URL,(req,res)=>{
    console.log(res);
});
const bodyParser = require('body-parser')
const routeEmployee=require("./routes/student");
const routeDept=require("./routes/departments");
const auth =require("./routes/auth");

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
app.use("/api/v1/",auth);

let PORT =3000
app.listen(PORT,()=>{
    console.log(`local host running ${PORT}`);
})
