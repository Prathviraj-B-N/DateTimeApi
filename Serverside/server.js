var bGround = require('fcc-express-bground');
const express = require("express");
const app = express();
var myApp = require('./myApp');

var port = 3000
bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, function(){
   bGround.log('Node is listening on port '+ port + '...')
});
