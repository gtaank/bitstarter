var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
  response.send("Trying to read index.html " + (fs.readFile('index.html', function(err,data){if(err) throw err; return(" Reading from " + data);});));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
