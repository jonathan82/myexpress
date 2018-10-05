const express = require('express');
const router = express.Router();
const db = require('../helpers/db');
const Joi = require('joi')

const schema = Joi.object().keys({
  username: Joi.string().required().min(3).max(25).token(),
  email: Joi.string().email().required(),
  phone: Joi.string().length(10).required(),
  password: Joi.string().required().min(6).allow(),
  profileText: Joi.string().max(1000)
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // db.create('SimbaMainTable', {Id: 'jon10'}).then(() => {
  //   res.send('hello jonathan');
  // }).catch((err) => {
  //   next(err);
  // });
  res.send(Joi.validate({
    username: 'fdsa',
    email: 'jonlin82@gmail.com',
    phone: '5102008156',
    password: '12346',
    fdsafd: 'fdsaf'
  }, schema, {allowUnknown:true}));
});

module.exports = router;
