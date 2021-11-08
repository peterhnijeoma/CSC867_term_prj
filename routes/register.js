const express = require('express');
const router = express.Router();
const register = require('../controller/register');

/* GET from landing page to resiger page. */
//console.log("in register router");
router.get('/', function (req, res, next) {
    //console.log("inside get login router")
    res.render('register', { error: false });
});

/* save/create user account from register page and navigate to lobby page*/
router.post('/', function (req, res, next) {
    const username = req.body.username;
    const gamename = req.body.gamename;
    let saveResult = register(gamename, username, req.body.password);
    if (saveResult)
    {
        res.render('lobby', {username: gamename});
    }
    else {
        res.render('register', {error: true});
    }
});


module.exports = router;

