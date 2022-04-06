//importation de mongoose
const mongoose = require("mongoose");

//Modèle de la bdd pour le signup (donc pour enregistrer un nouvel utilisateur)
const userSchema = mongoose.Schema({
    email: {type :  String, required : true, unique : true },
    password: {type : String, required : true }
});

//exportation du module
module.exports = mongoose.model("user", userSchema);