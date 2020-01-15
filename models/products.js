const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    owner: String,
    description: String,
    price: Number,
    type: String,
    CAT: { type: Date, default: Date.now }
});
const productModel = mongoose.model('products', productSchema);
module.exports = productModel;