local_sender.js:: This program is used to read from the input file and post to the port.

local_sender_chunk.js:: This program is used to read from the input file, clubs all the records to one line message in the input file and posts the data to the port.

local_postqueue.js: This will read the data from the port and writes to the kafka topic, this will hold the time when the message is sent to the EC2 in a file.

local_postqueue_chunk.js:: This will read the data from the prot and writes to a kafka topic.this will hold the time when the message is sent to the EC2 in a file.

local_consumer.js: This is the inbound from ec2 job to the localmachine.
This will hold the return time of each message from the EC2 in a file.

caliculateTimes.js: This will take the two input files created by local_postqueue.js/[local_postqueue_chunk.js] and local_consumer.js, as these files contains the time stamp of the topic onboarding and topic exiting from EC2 Kafka. The differene between these two time stamps are calicualted and divied by 1000 to save the round trip time of message in seconds.
