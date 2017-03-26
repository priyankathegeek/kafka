var fs = require("fs");
var kafka = require('kafka-node'), Producer = kafka.Producer, client = new kafka.Client('localhost:2181'), producer = new Producer(client);
var i = 0;

var timeStamp1 = Math.floor(Date.now());

producer.on('ready', function () {
console.log('INFO:: Producer ready \n');


var WebSocket = require('ws')
  , ws = new WebSocket('ws://localhost:8080');

console.log('INFO:::web soclet opened \n');


ws.on('open', function() {  });
console.log('INFO:: wEB SOCKET OPENED \n');

      //  while (true){
            
ws.on('message', function(message){
console.log('INFO:: Got message \n');
          
                payloads = [ { topic: 'testcase29', messages:message , partition: 0 }, ];
               
                producer.send(payloads, function(error, data) {
                    if (!data){
                        console.log(data)
                    
                              }
                    if (error){
                        console.log('KAFKA RESPONSE ERROR: ', error)
                              }
                                                               });
               
        });
    // }
    });

                
