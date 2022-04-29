const http = require('http');
const fs = require('fs');


const readStream = fs.createReadStream(__dirname + '/text.txt')
readStream.on('data',(chunk)=> {
  console.log('new chunk received: ')
   console.log(chunk);
 })

// const server = http.createServer((req, res)=>{
//   console.log('request was made from '+ req.url);
// res.writeHead(200, {'Content-Type':'text/plain'})
// res.end("This is node js")
// })

// server.listen(3000, 'localhost');
console.log('Listening to port 3000');
