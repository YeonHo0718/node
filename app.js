var express = require('express');
var app = express();

app.get('/', function(res,req) {
  res.send("Hello World");
});

app.listen(3000, function(){
  console.log("Server Started");
});
