var fs = require("fs");
var kafka = require('kafka-node');
var Consumer = kafka.Consumer,
    // The client specifies the ip of the Kafka producer and uses
    // the zookeeper port 2181
    client = new kafka.Client("localhost:2181"),
    // The consumer object specifies the client and topic(s) it subscribes to
    consumer = new Consumer(
        client, [ { topic: 'testcase31', partition: 0, fromOffset: -1 } ], { autoCommit: true });

consumer.setOffset('testcase31', 0, 3);
consumer.on('message', function (message) {
    // grab the main content from the Kafka message
//    var msg = message.value;
 //  console.log('Caliclulating the round trip time: %s', msg);
var timeStamp1 = Math.floor(Date.now());
fs.appendFile('TimeCheckReturn.txt',timeStamp1);
fs.appendFile('TimeCheckReturn.txt','\n');
     });

