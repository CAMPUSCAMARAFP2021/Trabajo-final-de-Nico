const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    console.log(req.headers)
    const {authorization} = req.headers;
    const {user} = jwt.verify(authorization, 'plastico');
    req.user = user;
    next();
}