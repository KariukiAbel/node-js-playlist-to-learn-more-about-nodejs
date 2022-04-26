const http = require('http');

const server = http.createServer((req, res)=>{
  console.log('request was made from '+ req.url);
res.writeHead(200, {'Content-Type':'text/plain'})
res.end("This is node js")
})

server.listen(3000, 'localhost');
console.log('Listening to port 3000');
