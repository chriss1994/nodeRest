const productModel = require('../models/product')

//return list of products
const getProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.send(products)
    }
    catch (err) {
        res.status(500).send(err)
    }
};

//return products by name
const getProductsByName = async (req, res) => {
    try {

        const products = await productModel.find({ "name": req.params.name });
        res.send(products)
    }
    catch (err) {
        res.status(500).send(err)
    }
};

//save a product
const saveProduct = async (req, res) => {
    try {
        const { name, cost, quantity } = req.body;
        const products = new productModel({ name, cost, quantity });
        let response = await products.save();
        res.status.send(200)
    }
    catch (err) {
        res.status(500).send(err)
    }
};

module.exports = { getProducts, saveProduct, getProductsByName };