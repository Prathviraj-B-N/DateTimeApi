// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/",(req,res)=>{
  let d = new Date();
  res.json({'unix':d.getTime(),'utc':d.toUTCString()});
});

app.get("/api/:date",(req,res)=>{
  
  function toDate(date){
    d = new Date(date);
    return d.toUTCString();
  }

  let utc = toDate(req.params.date);
  if(utc == 'Invalid Date'){
    if(toDate(parseInt(req.params.date)) != 'Invalid Date'){
      let date = parseInt(req.params.date);
      res.json({'unix':date,'utc':toDate(date)});
    }else{
    res.json({ error : "Invalid Date" });
    }
  }
  else{
    res.json({'unix':d.getTime(),'utc':utc});
  }

});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
