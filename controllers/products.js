let product = require('../models/product')

exports.creatProduct = (req, res) => {
    let prod = new Product (req.body)

    prod.save()
    .then((product) => {
        return res.status(201).json({product})
        })
    .catch((error) => {
        return res.status(400).json({error})
        })
}