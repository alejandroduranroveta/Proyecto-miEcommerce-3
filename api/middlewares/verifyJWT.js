const { request } = require("express");
const jwt = require('jsonwebtoken');
const extractToken = require('../helpers/extractToken');


function verifyJWT (req = request, res, next){
    const token = extractToken(req);    
    try {
        const name = jwt.verify(token, process.env.JWT_PRIVATE);
        req.name = name;
        next();
        
    } catch (error) {
        res.status(401).json({
            status: 'errror',
            msg: 'Token inválido',
            error
        })
    }

}

module.exports = verifyJWT;