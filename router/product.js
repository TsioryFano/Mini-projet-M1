let express = require('express');
const { route } = require('../app');
let router = express.Router();

// Appel de createProduct de puis ../controllers/product
let ProdCtrl = require('../controllers/product');

router.post('/', ProdCtrl.createProduct);


module.exports = router;