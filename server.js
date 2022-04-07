// Installation Express
//Importation du package HTTP de Nodejs
const http = require('http');

//Importation du package pour les variables d'environnement
const dotenv = require("dotenv");
const result = dotenv.config();

//Importation de l'application/fichier app.js
const app = require('./app');

//Creation du server
const server = http.createServer(app);


//Le serveur écoute les requêtes sur port
server.listen(process.env.PORT, () => {
    console.log("Le Server a reçu la requête !");
})


/*
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
