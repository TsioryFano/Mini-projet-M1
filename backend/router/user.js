//Importation de Express
const express = require("express");

//Importation du controllers/user.js (la fonction signup() plus précisément )
const userController = require("../controllers/user");

//L'objet Router()
const router = express.Router();

//La route signup
router.post("/signup", userController.signUp);

//La route login

//exportation du module
module.exports = router;