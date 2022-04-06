// importation models de la bdd User.js
const User = require("../models/User");

//Signup pour enregistrer le noivel utilisateur dans la bdd
exports.signup = (req, res) => {
console.log("CONTENU : req.body - controllers/user");
console.log(req.body);
};