//importation de bcrypt pour hacher le password
const { hash } = require("bcrypt");
const bcrypt = require("bcrypt");

// importation models de la bdd User.js
const UserModel = require("../models/User");
console.log ("--> CONTENU: User - controllers/user.js");
console.log(UserModel);


//Signup pour enregistrer le nouvel utilisateur dans la bdd
module.exports.signUp = async (req, res) => {
    console.log("CONTENU : req.body.email - controllers/user");
    console.log(req.body.email);

    console.log("CONTENU : req.body.password - controllers/user");
    console.log(req.body.password);

 // hasher le MdP avant de l'envoie vers la bdd
//salt 10 execution de l'algorithme de hashage
 bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
        const user = new UserModel({
            email : req.body.email,
            password : hash
        });
        console.log("--> CONTENU: user - controllers/user.js ");
        console.log(user);
        // Envoie du user vers la bdd
        user
            .save()
            .then(() => res.status(201).send({message : "Usilisateur créé et sauvegardé"}))
            .catch((error) => res.status(400).send({error}).send());
        
    })
    .catch((error) => res.status(500).json({error}).send(console.log(error)));


};



/* //Autre méthode qui ne ma pas convaincu
module.exports.signUp = async (req, res) => {
    console.log(req.body);
    const {mail, password} = req.body

    try{
        const user = await UserModel.create({mail, password});
        res.status(201).json({ user: user._id});
    }
    catch(err) {
        res.status(200).send({err})
    }
}
*/