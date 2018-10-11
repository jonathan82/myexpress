const express = require('express');
const Joi = require('joi');
const wrapAsync = require('../helpers/asyncHandler');
const postDb = require('../models/post');

const router = express.Router();

//////////////////////// Posts by User //////////////////////////////
router.get('/@:username', wrapAsync(async function (req, res, next) {
    res.send(req.params.username);
}));


///////////// Posts in Area2 (ex. 'SF Bay Area - East Bay') /////////
router.get('/:area1/:area2', wrapAsync(async function (req, res, next) {
    res.send(`${req.params.area1} - ${req.params.area2}`);
}));


////////////// Posts by Area1 (ex. 'SF Bay Area') ///////////////////
router.get('/:area1', wrapAsync(async function (req, res, next) {
    const lastSeen = req.query.lastSeen ? JSON.parse(req.query.lastSeen) : null;
    const data = await postDb.postsByArea(req.params.area1, lastSeen);
    res.send(data);
}));


///////////////////// Create new Posting ///////////////////////////
router.post('/', wrapAsync(async function (req, res, next) {

}));


module.exports = router;