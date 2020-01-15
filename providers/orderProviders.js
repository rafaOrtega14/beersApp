const orderModel = require('../models/orders');
const mongoose = require('mongoose');
async function insertOrder(order) {
    try {
        const newOrder = await orderModel.create(order);
        return newOrder;
    } catch (err) {
        return err;
    }
}
async function getOrdersByUserId(id) {
    try {
        const orders = orderModel.find({ userId: mongoose.Types.ObjectId(id) });
        return orders;
    } catch (err) {
        return err;
    }
}

function convertProductId(productsId) {
    let productsMongooseId = [];
    for (let i = 0; i < productsId.length; i++) {
        productsMongooseId.push(mongoose.Types.ObjectId(productsId[i]))
    }
    return productsMongooseId;
}
module.exports = { insertOrder, getOrdersByUserId };