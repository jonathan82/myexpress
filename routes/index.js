const express = require('express');
const router = express.Router();
const db = require('../helpers/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.create('SimbaMainTabl', {Id: 'jon10'});
  res.send('hello jonathan');
});

module.exports = router;
