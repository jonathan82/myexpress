const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), function (req, res, next) {
    res.send('ok');
    console.log(req.user);
});

module.exports = router;