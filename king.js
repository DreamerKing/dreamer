var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hello Dreamer!')
});

var server = app.listen(3000,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Dreamer Blog is running at http://%s:%s",host,port);
})