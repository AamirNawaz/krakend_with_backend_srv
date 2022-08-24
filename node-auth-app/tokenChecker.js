const jwt = require('jsonwebtoken')
const config = require('../node-auth-app/config.json')

module.exports = (req,res,next) => {
  const token = req.body.token || req.query.token || req.headers['Authorization'] ||req.headers['authorization'] || req.headers['kid']
  // decode token
  console.log('checkingToken::::::',token)
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err) {
            return res.status(401).json({"error": true, "message": 'Unauthorized access.' });
        }
      req.decoded = decoded;
      next();
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
        "error": true,
        "message": 'No token provided.'
    });
  }
}