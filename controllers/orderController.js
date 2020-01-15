const { insertOrder, getOrdersByUserId } = require('../providers/orderProviders');
const mongoose = require('mongoose');
async function newOrder(req, res) {
    try {
        const order = {
            productsId: req.body.productId,
            userId: req.body.reciever,
            deliver: req.body.deliver
        }
        console.log(order)
        const insertedOrder = await insertOrder(order);
        res.send(insertedOrder);
    } catch (err) {
        console.log(err);
        res.send({ err: err })
    }
}

async function retrieveUserOrders(req, res) {
    try {
        const orders = await getOrdersByUserId(req.params.id);
        res.send(orders);
    } catch (err) {
        res.send({ err: err.msg() })
    }
}
module.exports = { newOrder, retrieveUserOrders };