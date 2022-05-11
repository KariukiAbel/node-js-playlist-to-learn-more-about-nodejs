const fs = require('fs');

// reading and writing a file asynchroniously
fs.readFile('new textfile.txt', 'utf8', (err, data)=> {
// callback function fired when the proces is done

console.log(data);
})
console.log('This line will be executed first before the output of the file reading');
