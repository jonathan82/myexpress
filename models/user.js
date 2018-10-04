const db = require('../helpers/db');
const Joi = require('joi');

const userSchema = Joi.object().keys({
    
});

module.exports.create = function create(un, pwd, em, ph) {
    db.create('SimbaMainTable', {
        Username: un,
        Email: em,
        HashedPwd: '',
        Phone: ph,
        VerifiedPhone: false,

    })   
}
