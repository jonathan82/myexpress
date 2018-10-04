const express = require('express');
const router = express.Router();
const db = require('../helpers/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.create('SimbaMainTabl', {Id: 'jon10'}).then(() => {
    res.send('hello jonathan');
  }).catch((err) => {
    next(err);
  });
});

module.exports = router;
