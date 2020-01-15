const userModel = require('../models/users');
const { validateEmail } = require('../utils/validateMail');

async function registerUser(userInfo) {
    try {
        const newUser = await userModel.create(userInfo);
        return newUser;
    } catch (err) {
        return err;
    }
}
async function findUserByNameOrMail(name_mail) {
    let userData = null;
    try {
        if (validateEmail(name_mail)) {

            userData = await userModel.findOne({ mail: name_mail });
        } else {
            userData = await userModel.findOne({ name: name_mail });
        }
    } catch (err) {
        console.log(err);
    }

    return userData;
}
module.exports = { registerUser, findUserByNameOrMail }