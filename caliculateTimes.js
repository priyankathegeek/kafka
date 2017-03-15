
var fs = require('fs');
var sentContents = fs.readFileSync('TimeCheck.txt').toString().match(/^.+$/gm);
var diffsecs =0;
var returnContents = fs.readFileSync('TimeCheckReturn.txt').toString().match(/^.+$/gm);

//checking if both the file lengths are same.

if ( sentContents.length == returnContents.length)
{
console.log("Same lenght for both input files \n");
console.log("Length of file is \n");
console.log(returnContents.length);

 for (i=0; i<returnContents.length; i++)
   {
     diffsecs = (returnContents[i] - sentContents[i])/1000;
     fs.appendFile('TimeDiff.txt',diffsecs);
     fs.appendFile('TimeDiff.txt','\n');

   }
}
else
console.log("ERROR::: NOT SAME LENGTH FOR input files \n");



