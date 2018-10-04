const express = require('express');
const Joi = require('joi');
const router = express.Router();
const crypto = require('crypto');

const schema = Joi.object().keys({
  username: Joi.string().required().min(3).max(25).token(),
  email: Joi.string().email().required(),
  phone: Joi.string().length(10).required(),
  password: Joi.string().required().min(6).allow(),
  profileText: ''  
});

// Get specific user
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new user
router.post('/', function(req, res, next) {
  
});

module.exports = router;
