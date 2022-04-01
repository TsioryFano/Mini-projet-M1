// Installation Express
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(80, () => {
    console.log("Le Server a reçu la requête !");
})


/*
app.get('/', (request,response) => {
    response.send('Bienvenue M. Tsiory')
})

app.listen(80)
*/

/*
//Server NodeJS
let http = require ('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', (request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404, {
                'Content-type' : 'text/html; charset=utf-8'
            })        
            response.end('Fichier introuvable')
        }else
        response.writeHead(200, {
            'Content-type' : 'text/html; charset=utf-8'
        })   
        response.end(data)    
    })  
})
server.listen(80)
*/
