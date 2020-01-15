const mongoose = require('mongoose');
const productModel = require('../models/products');

async function insertProduct(product) {
    try {
        const newProduct = await productModel.create(product);
        return newProduct;
    } catch (err) {
        return err;
    }
}

async function getProducts(skip) {
    try {
        const products = await productModel.find({}).skip(skip).limit(6)
        return products;
    } catch (err) {
        return err;
    }
}

async function deleteProduct(id) {
    try {
        const deletedProduct = await productModel.deleteOne({ _id: mongoose.Types.ObjectId(id) });
        return deletedProduct;
    } catch (err) {
        return err;
    }
}

async function updateProduct(id, product) {
    try {
        const updatedProduct = await productModel.updateOne(
            { _id: mongoose.Types.ObjectId(id) },
            product);
        return updatedProduct;
    } catch (err) {
        return err;
    }
}

module.exports = { insertProduct, getProducts, deleteProduct, updateProduct }