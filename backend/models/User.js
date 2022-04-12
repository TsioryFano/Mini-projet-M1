//importation de mongoose
const mongoose = require("mongoose");

//Importation reconnaissance type mail.
const { isEmail } = require("validator");

//IMportation bibliotheque pour le cryptage de MdP
const bcrypt = require("bcrypt");

//Modèle de la bdd pour le signup (donc pour enregistrer un nouvel utilisateur)
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    minLength: 6,
  },
});

//Fonction cryptage MdP exécutée avant insertion de données dans la BDD
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//Fonction de décryptage du MdP pour le l'authentification (signin) de l'utilisateur
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const authentification = await bcrypt.compare(password, user.password);
    if (authentification) {
      return user;
    }
    throw Error("User non existant");
  }
  throw Error("Erreur hita");
};

//exportation du module
module.exports = mongoose.model("User", userSchema);
