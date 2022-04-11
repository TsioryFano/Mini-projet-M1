//Importation de Mongoose
const mongoose = require('mongoose');

//Connexion à mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.osoth.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('Connexion à Mongoose OK')
}).catch((error) => {
    console.log(error);
});