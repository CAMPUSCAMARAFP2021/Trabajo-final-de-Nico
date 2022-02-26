const jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    const {authorization} = req.query;
    const {user} = jwt.verify(authorization, 'plastico');
    req.user = user;
    next();
}