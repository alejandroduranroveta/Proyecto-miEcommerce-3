
function extractToken (req) {

    const tokenAuth = req.headers.authorization.split(' ');
    if(tokenAuth && tokenAuth[0] === 'Bearer'){
        return tokenAuth[1];
    }else{
        return null;
    }
    
}

module.export = extractToken;