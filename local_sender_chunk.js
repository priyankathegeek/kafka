var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
    });

var myLines = require('fs').readFileSync('input.txt').toString().match(/^.+$/gm);
    ws.send(myLines.join(' '));
});
