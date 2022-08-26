var express = require('express');
var router = express.Router();

const jwt = require("jsonwebtoken")

const {AuthChecker} = require('../middleware/authMiddleware')



const postsData = [
    {
      "userId": 1,
      "id": 1,
      "title": "quidem molestiae enim"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "sunt qui excepturi placeat culpa"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "omnis laborum odio"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "non esse culpa molestiae omnis sed optio"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "eaque aut omnis a"
    }]


router.get('/', AuthChecker,function (req, res, next) {
  res.status(200).json({
    "status": true,
    // "Headers": req.headers.authorization,
      "posts":postsData
    })

    });


    module.exports = router;




