//Importation de Express
const express = require("express");

//Importation du controllers/user.js (la fonction signup() plus précisément )
const userController = require("../controllers/user");

//L'objet Router()
const router = express.Router();

//La route signup
router.post("/signup", userController.signUp);

//La route signin
router.post("/signin", userController.signIn);

//La route singout
router.get("/logout", userController.logout);

//La route  pour avoir toutes les informations sur un utilisateur.
router.get("/", userController.getAllUsers);

// la route pour avoir un utilisateur en fonction de son Id.
router.get("/:id", userController.userInfo);

//exportation du module
module.exports = router;
