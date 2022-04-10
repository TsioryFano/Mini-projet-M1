// importation models de la bdd User.js
const User = require("../models/User");
console.log ("--> CONTENU: User - controllers/user.js");
console.log(User);


//Signup pour enregistrer le nouvel utilisateur dans la bdd
exports.signup = (req, res) => {
    console.log("CONTENU : req.body.email - controllers/user");
    console.log(req.body.email);

    console.log("CONTENU : req.body.password - controllers/user");
    console.log(req.body.password);

    const user = new User({
        email : req.body.email,
        password : req.body.password
    });

    console.log("--> CONTENU: user - controllers/user.js ");
    console.log(user);

};


