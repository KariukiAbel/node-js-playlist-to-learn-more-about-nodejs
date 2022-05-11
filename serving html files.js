const http = require('http');
const fs = require('fs');

// serving a html file
const server = http.createServer((req, res)=>{
console.log('request was made from '+ req.url);
res.writeHead(200, {'Content-Type':'text/html'})
const readStream = fs.createReadStream(__dirname + '/index.html','utf8')
readStream.pipe(res)
})

server.listen(3000, 'localhost');
console.log('Listening to port 3000');
