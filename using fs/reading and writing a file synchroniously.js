const fs = require('fs');
// reading a file synchroniusly i.e blocking code, must be executed
// first till completion so as to move to the next block of code
var fileRead = fs.readFileSync('text.txt','utf8');
fs.writeFileSync('new textfile.txt', fileRead)
console.log(fileRead);
