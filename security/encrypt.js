const bcrypt = require('bcrypt');

async function securePassword(req, res, next) {
    try {
        const textPlainPass = req.body.password;
        const ROUNDS = 10;
        const hash = await bcrypt.hash(textPlainPass, ROUNDS);
        req.body.password = hash;
        next();
    } catch (err) {
        console.log(err);
        res.send(err);
    }
}
async function compareHashes(userId, pass, hash) {
    let logged = false;
    console.log(pass, hash);
    try {
        logged = await bcrypt.compare(pass, hash);
    } catch (e) {
        console.log(e)
    }
    return logged;
}
module.exports = { securePassword, compareHashes }