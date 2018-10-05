const db = require('../helpers/db');
const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().required().min(3).max(25).token(),
    email: Joi.string().email().required(),
    phone: Joi.string().length(10).required(),
    password: Joi.string().required().min(6),
    profileText: Joi.string().max(1000)
});

module.exports.create = function create(un, pwd, em, ph) {
    // validate user

    // make sure username and email doesn't exist

    // creat user in db
    db.create('SimbaMainTable', {
        Username: un,
        Email: em,
        HashedPwd: '',
        Phone: ph,
        VerifiedPhone: false,

    })   
}
