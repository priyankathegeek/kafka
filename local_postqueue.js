var fs = require("fs");
var kafka = require('kafka-node'), Producer = kafka.Producer, client = new kafka.Client('localhost:2181'), producer = new Producer(client);
var i = 0;

var timeStamp1 = Math.floor(Date.now());

//var file = new File(txtFile);
//file.open("w");
//file.write(timeStamp);
//file.close();


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
var timeStamp1 = Math.floor(Date.now());
fs.appendFile('TimeCheck.txt',timeStamp1);
fs.appendFile('TimeCheck.txt','\n'); 
//file.write(timeStamp);
//file.close();  
          
                payloads = [ { topic: 'testcase29', messages:message , partition: 0 }, ];
               
                producer.send(payloads, function(error, data) {
                    if (!data){
                        console.log(data)
                    
                              }
                    if (error){timeStamp
                        console.log('KAFKA RESPONSE ERROR: ', error)
                              }
                                                               });
               
        });
    // }
    });

                
