var express = require('express')
const port=8080;
var app = express();
app.use("/",(req,res,next)=>{
res.status(200).json({"msg":"thanks for visiting"});
});
app.listen(port,()=>{
console.log("----------------------------------server started on port "+port+ " -------------------------------");
});
