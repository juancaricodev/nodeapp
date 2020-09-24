const http = require('http')

const PORT = 8000

http.createServer((request, response) => {
  response.writeHead(200, { 'content-Type': 'text/plain'})
  response.end('Hello World!')
}).listen(PORT)

console.log(`Server running and listening on port https://localhost:${PORT}`)