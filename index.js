var express = require("express");
var app = express();
var path = require("path");

app.get("/", function(req, res){
  res.send("Hello World\n");
});

app.use(express.static( __dirname + '/gameoflife-master' ));

app.get("/gol", function(req, res){
  res.sendFile(path.join(__dirname, 'gameoflife-master', 'main.html'));
});

var server = app.listen(8080, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server working on http://%s:%s", host, port);
});
