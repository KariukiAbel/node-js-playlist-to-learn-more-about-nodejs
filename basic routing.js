const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  console.log('request was made from ' + req.url);

  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fs.createReadStream('./index.html').pipe(res)
  } else if (req.url === '/contact') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fs.createReadStream('./contact.html').pipe(res)
  } else if (req.url === '/api/projects' || req.url === '/api') {
    const project_object = [{
        name: 'Nabesh',
        site: 'nabesh.ke',
        language: 'js',
        framework: 'nodejs'
      },
      {
        name: 'almart',
        site: 'almart.ke',
        language: 'python, js',
        framework: 'django, nodejs'
      }
    ]
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(project_object))
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/html'
    })
    fs.createReadStream('./404.html').pipe(res)
  }

})

server.listen(3000, 'localhost');
console.log('Listening to port 3000');
