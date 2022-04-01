let app = require('express')()


//Connxion à mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tsiory:<Nothing123>@ekaly.icbx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',).then(() => 
{
    console.log('Connexion à Mongoose')
}).catch((error) => {
    console.log(error);
});

app.get('/', (request,response) => {
    response.send('Bienvenue M. Tsiory Fano')
});

module.exports = app;