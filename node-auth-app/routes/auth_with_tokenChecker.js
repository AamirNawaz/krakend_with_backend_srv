var express = require('express');
var router = express.Router();
const config = require('../config')
const jwt = require("jsonwebtoken")



const tokenList = {}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({"success":true,"message":"Get function called!" })
});


router.post('/login', (req, res) => {
    
    const postData = req.body;
    
    const user = {
        "email": postData.email,
    }
    
    if (postData.email === "" || typeof postData.email ==="undefined") {
        return res.status(400).json({
            "success": false,
            "message":"Email is required"
        })
    }

    if (postData.password === "" || typeof postData.password ==="undefined") {
        return res.status(400).json({
            "success": false,
            "message":"Password is required"
        })
    }
    
    
    // Detail of signing token is available on Readme.txt file.
        var signOptions = {
            header: {alg:"HS256", typ:"JWT", kid:"sim2"},
            expiresIn:  "5m"
        };

    const access_token = jwt.sign(user, config.secret, signOptions);
   
        
    const refreshToken = jwt.sign(user, config.refreshTokenSecret,
        {
            header: {alg: "HS256", typ: "JWT", kid: "sim2" }, expiresIn:"1d"
        })
    
    const response = {
        "exp": Math.floor(Date.now() / 1000) + (60 * 60),
        "access_token": access_token,
        "refresh_token": refreshToken,
    }
    tokenList[refreshToken] = response
    res.status(200).json(response);
})

router.post('/token', (req, res) => {
    // refresh the damn token
    const postData = req.body
    console.log(postData)
    // if refresh token exists
    if((postData.refreshToken) && (postData.refreshToken in tokenList)) {
        const user = {
            "email": postData.email,
        }
        var signOptions = {
            header: {alg:"HS256", typ:"JWT", kid:"sim2"},
            expiresIn:  "5m"
        };

    const access_token = jwt.sign(user, config.secret, signOptions);
            
        const response = {
            "access_token": access_token,
        }
        // update the token in the list
        tokenList[postData.refreshToken].access_token = access_token
        res.status(200).json(response);        
    } else {
        res.status(404).send('Invalid request')
    }
})

router.use(require('../tokenChecker'))

router.get('/validate_token', (req,res) => {
    // all secured routes goes here
    res.send('I am secured...')
})

module.exports = router;
