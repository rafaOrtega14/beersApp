const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    pass: String,
    address: String,
    type: String,
    stripeID: String,
    CAT: { type: Date, default: Date.now }
});
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;