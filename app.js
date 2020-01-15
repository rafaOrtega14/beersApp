const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { securePassword } = require('./security/encrypt');
const { validateToken } = require('./security/token');
const { register, login } = require('./controllers/userControllers');
const {
    uploadProduct,
    retrieveProducts,
    removeProduct,
    modifyProduct } = require('./controllers/productControllers');
const { newOrder, retrieveUserOrders } = require('./controllers/orderController');
const app = express();

app.use(bodyParser.json());

app.post('/user/register', securePassword, register);
app.post('/user/login', login);

app.post('/product', validateToken, uploadProduct);
app.get('/product/:skip', validateToken, retrieveProducts);
app.delete('/product/:id', validateToken, removeProduct);
app.put('/product/:id', validateToken, modifyProduct);

app.post('/order', validateToken, newOrder);
app.get('/orders/:id', validateToken, retrieveUserOrders);

mongoose.connect('mongodb://localhost/BeersApp', { useNewUrlParser: true });
app.listen(3000, () => {
    console.log('API listening on port 3000');
})

