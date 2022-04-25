const fs = require('fs');

// reading a file synchroniusly i.e blocking code, must be executed
// first till completion so as to move to the next block of code
var fileRead = fs.readFileSync('text.txt','utf8');
fs.writeFileSync('new textfile.txt', fileRead)
// console.log(fileRead);


// reading and writing a file asynchroniously
fs.readFile('new textfile.txt', 'utf8', function (err, data) {
//callback function fired when the proces is done
console.log(data);
})
console.log('This line will be executed first before the output of the file reading');
