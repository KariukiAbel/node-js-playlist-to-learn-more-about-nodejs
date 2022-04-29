const http = require('http');
const fs = require('fs');


const readStream = fs.createReadStream(__dirname + '/text.txt','utf8')
const writeStream = fs.createWriteStream(__dirname + '/text2.txt')

// readStream.on('data',(chunk)=> {
//   console.log('new chunk received: ')
//    // console.log(chunk);
//    writeStream.write(chunk)
//  })


// using pipe used on readable streams
// readStream.pipe(writeStream)

const server = http.createServer((req, res)=>{
console.log('request was made from '+ req.url);
res.writeHead(200, {'Content-Type':'text/html'})
const readStream = fs.createReadStream(__dirname + '/index.html','utf8')
readStream.pipe(res)
// res.end("This is node js")
})

server.listen(3000, 'localhost');
console.log('Listening to port 3000');
