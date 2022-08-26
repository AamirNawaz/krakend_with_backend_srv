const jwt = require('jsonwebtoken')

const AuthChecker = async (req, res, next) => {
    let token = null;
    try {

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            try {
                
                token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(token, process.env.JWT_SECRETE);
                req.decoded = decoded;
                next();
            } catch (error) {
                res.status(403).json({ "error": error.message });
            }

        } else {
            return res.status(403).json({
                "error": true,
                "message": 'No token provided.'
            });
        }

    } catch (error) {
        res.status(403).json({ "error": error.message });
    }
}


module.exports = {
    AuthChecker
}