const { registerUser, findUserByNameOrMail } = require('../providers/userProviders');
const { generateToken } = require('../security/token');
const { compareHashes } = require('../security/encrypt');

async function register(req, res) {
    const userInfo = {
        name: req.body.name,
        mail: req.body.mail,
        pass: req.body.password,
        type: req.body.type,
        address: req.body.address,
        stripeID: ''
    }
    try {
        const newUser = await registerUser(userInfo);
        const token = generateToken(newUser._id);
        res.send(token);
    } catch (err) {
        console.log(err)
        res.send(err);
    }
}
async function login(req, res) {
    let userData = null;
    if (req.body.name == null) {
        userData = await findUserByNameOrMail(req.body.mail);
    } else {
        userData = await findUserByNameOrMail(req.body.name);
    }
    if (compareHashes(userData._id, req.body.password, userData.pass)) {
        const token = generateToken(userData._id);
        res.send(token);
    } else {
        res.send({ err: 'password or user incorrect' })
    }
}
module.exports = { register, login };
