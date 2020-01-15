const jwt = require('jsonwebtoken');

function generateToken(userID) {
    const token = jwt.sign({ userId: userID }, 'dujson234o2sn');
    return token;
}
function validateToken(req, res, next) {
    var token = req.headers.authorization;
    if (token) {
        try {
            const info = jwt.verify(token, 'dujson234o2sn');
            req.body.userId = info;
            next();
        } catch (err) {
            console.log(err)
            res.send({ err: "Invalid token" });
        }
    } else {
        res.send({ err: "Not token found" });
    }
}
module.exports = { generateToken, validateToken }