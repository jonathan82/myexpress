const express = require('express');
const Joi = require('joi');
const router = express.Router();

const schema = {

}

// Get specific user
router.get('/:id', function(req, res, next) {
  res.send('respond with a resource');
});

// Create a new user
router.post('/', function(req, res, next) {
  
});

module.exports = router;
