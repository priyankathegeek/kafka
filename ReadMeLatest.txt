dataGenerator.js::This program will generate huge data as per our need,the data will saved in input.txt file

local_sender_chunk.js::This program will clud the data as a chunck which was present in input.txt and it will send to the port 8080(TimeCheck.txt file will get genarated,this holds the time in milliseconds when it got posted to port 

local_sender.js::This program will take the data from input.txt as a line by line and each line is posted to port saperately(saperate message)

local_postqueue_chunk.js::This program will capture the data from the port 8080 and it will send to Kafka topic

ec2_nodereply.js::This program will capture the data from Kafka topic(sourced from local_postqueue_chunk.js) and send to the producer.

local_consumer.js::This program will capture the data from ec2(ec2_nodereply.js)
and this program contain the timw when it got read from the Kafka topic(TimeCheckReturn.txt file will get generated once after running this program).

caliculateTimes.js::This program will give the difference between TimeCheck.txt and TimeCheckReturn.txt

