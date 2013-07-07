var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var out;
    fs.readFile('index.html', function(err,data){
	if(err) throw err; 
	out = data;
	response.send('Trying to read index ' + out + ' printing data ' + data);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
