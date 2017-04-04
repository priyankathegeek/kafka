var fs = require('fs');

var test = '10 11 12 14 15 16 16';

for(i=0;i<10;i++)
{
fs.appendFile('input.txt',test);
fs.appendFile('input.txt','\n');
}


