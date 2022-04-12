// importation models de la bdd User.js
const UserModel = require("../models/User");
console.log("--> CONTENU: User - controllers/user.js");
console.log(UserModel);

//Pour controler l'existence de l'Id dans la bdd
const ObjectId = require("mongoose").Types.ObjectId;

//Importation Json web token
const jwt = require("jsonwebtoken");

//Signup pour enregistrer le nouvel utilisateur dans la bdd
module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await UserModel.create({ email, password });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).send({ err });
  }
};

//function pour rendre les tous les utilisateurs existant
module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password");
  res.status(200).json(users);
};

//finction pour rendre Un utilisateur précis à partir de son iD
module.exports.userInfo = (req, res) => {
  console.log(req.params);
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send("ID inconnu : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID inconnu : " + err);
  }).select("-password");
};

//Fucntion création clé token
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

//signin
module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).json(err);
  }
};

//logout
module.exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
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
