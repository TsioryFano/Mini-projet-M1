//Server NodeJS
let http = require ('http')

let server = http.createServer()

server.on('request', (request, response) => {
    response.writeHead(200)
    response.end('Serveur fonctionne')
})
server.listen(80)