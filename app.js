//Importation de express
const express = require ('express');

// Importation de bodyparser
let bodyParser = require('body-parser');

//Appel des données
//let RouteProducts = require('./router/product')

/*
 * Lien depuis mongo:
 * mongodb+srv://tsiory:<password>@cluster0.osoth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 */

//Importation de Mongoose
const mongoose = require('mongoose');

//Importation des routes signup
const userRoutes = require("./router/user");

//Importation du package pour les variables d'environnement
const dotenv = require("dotenv");
const result = dotenv.config();

//Connexion à mongoose
//JE n'ai pas créer un fichier spécifique pour la bdd mais tout de suite dans app.js
//Au niveau de changement des variable d'environnement, on n'utilise pas de simple quote mais de backticks (altgr+7) 
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.osoth.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true, useUnifiedTopology: true 
})
.then(() => {
    console.log('Connexion à Mongoose')
}).catch((error) => {
    console.log(error);
});


// création de l'application de express
const app = require('express')();

//transformer le corps en json objet js utilisable
app.use(bodyParser.json());

//La route d'authentificationn
app.use("/ekaly/authentification", userRoutes);


//app.use('./api/products/', RouteProducts)

/*
app.get('/', (request,response) => {
    response.send('Bienvenue M. Tsiory Fano')
});
*/

//Exporation de app.js
module.exports = app;

//Exportation de Mongoose
module.exports = mongoose;
