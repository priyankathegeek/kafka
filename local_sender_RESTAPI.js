var express = require('express');
var app = express();
var fs = require("fs");

var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

app.post('/addUser', function (req, res) 
{

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
    });

var myLines = require('fs').readFileSync('input.txt').toString().match(/^.+$/gm);
for (i =0; i< myLines.length; i++){
console.log("sending data \n");
 msg = myLines[i];
    ws.send(msg);
}
});
res.end("");
})

var server = app.listen(8081, function () {

 // var host = server.address().address
 // var port = server.address().port
    var host = "127.0.0.1";
    var port = 8081;
   
  console.log("Example app listening at http://%s:%s", host, port)

})


