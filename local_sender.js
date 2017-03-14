var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
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
