//importation de mongoose
const mongoose = require("mongoose");


//Modèle de la bdd pour le signup (donc pour enregistrer un nouvel utilisateur)
const userSchema = new mongoose.Schema(
    {
    email: {
        type :  String, 
        required : true, 
        unique : true,
        lowercase : true
    },
    password: {
        type : String, 
        required : true,
        max : 1024,
        minLength : 6
    }
});

//exportation du module
module.exports = mongoose.model("User", userSchema);