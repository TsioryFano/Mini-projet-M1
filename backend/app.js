//Importation de express
const express = require ('express');

// Importation de bodyparser
const bodyParser = require('body-parser');

const db = require("./db/db");

//Appel des données
//const RouteProducts = require('./router/product')

//Importation des routes signup
const userRoutes = require("./router/user");

//Importation du package pour les variables d'environnement
const dotenv = require("dotenv");
const result = dotenv.config({path:'.env'});
if (result.error){
    throw result.error
}

console.log(result.parsed);

// création de la fonction de express
const app = express();

/*
app.use('/api/products/', RouteProducts);
*/

//transformer le corps en json objet js utilisable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//La route d'authentificationn
app.use("/api/authentification", userRoutes);

/*
app.get('/', (request,response) => {
    response.send('Bienvenue M. Tsiory Fano');
});
*/

//Exporation de app.js
module.exports = app;


