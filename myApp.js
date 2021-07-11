var express = require('express');
var app = express();
console.log("Connected!")

app.get('/',function(req,res,next){
  req.time = new Date().toString();
  next();
},
function(req,res){
  res.json({"Date":req.time})
}
)

module.exports = app;
