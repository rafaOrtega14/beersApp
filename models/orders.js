const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    productsId: [String],
    userId: String,
    deliver: Date,
    CAT: { type: Date, default: Date.now }
});
const orderModel = mongoose.model('orders', orderSchema);
module.exports = orderModel;