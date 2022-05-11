const http = require('http');


const server = http.createServer((req, res)=>{
console.log('request was made from '+ req.url);
res.writeHead(200, {'Content-Type':'application/json'})
const object ={
  name:'abel',
  github_username:'KariukiAbel',
  jib:'Software developer and engineer'
}
res.end(JSON.stringify(object))
})


server.listen(3000, 'localhost');
console.log('Listening to port 3000');
