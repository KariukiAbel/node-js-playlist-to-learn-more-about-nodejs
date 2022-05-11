const http = require('http');
const fs = require('fs');


const readStream = fs.createReadStream(__dirname + '/text.txt','utf8')
const writeStream = fs.createWriteStream(__dirname + '/text2.txt')

readStream.on('data',(chunk)=> {
  console.log('new chunk received: ')
   // console.log(chunk);
   writeStream.write(chunk)
 })

// pipes are used on readable streams only
readStream.pipe(writeStream)
