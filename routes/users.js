const express = require('express');
const Joi = require('joi');
const user = require('../models/user');
const wrapAsync = require('../helpers/utils');
const db = require('../helpers/db');
const jwt = require('jsonwebtoken');
const config = require('../config');

const router = express.Router();

const schema = Joi.object().keys({
  username: Joi.string().required().min(3).max(25).token(),
  email: Joi.string().email().required(),
  phone: Joi.string().required().regex(/[0-9]{10}/),
  password: Joi.string().required().min(6)
});


/************** Create a new user ******************/
router.post('/', wrapAsync(async function(req, res, next) {

  // Validate input
  const {error} = Joi.validate(req.body, schema);

  if(error) {
    res.status(400).send(error.message);
    return;
  }

  // Check if user exists
  if(await db.exists(req.body.username)) {
    res.status(400).send('username already taken');
    return;
  }

  await user.create(req.body);

  res.send('ok');
}));

/************** Authenticate user ***************/
router.get('/authenticate', wrapAsync(async function(req, res, next) {
  const usernameOrEmail = req.query.usernameOrEmail;
  const password = req.query.password;

  if(await user.authenticate(usernameOrEmail, password)) {
    const token = jwt.sign({

    }, config.jwtSecretKey);
    res.send(token);
    return;
  }

  res.status(400).send("invalid username or password");
}));


module.exports = router;
