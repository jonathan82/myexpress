const db = require('../helpers/db');
const crypto = require('crypto');

module.exports.create = async function (user) {

    const hashedPwd = crypto.createHash('sha256').update(user.password).digest('hex');

    await db.create({
        Id: user.username,
        Email: user.email,
        HashedPwd: hashedPwd,
        Phone: user.phone,
        VerifiedPhone: false,
        JoinDate: new Date().toISOString()
    });
}

module.exports.authenticate = async function(usernameOrEmail, password) {
    const hashedPwd = crypto.createHash('sha256').update(password).digest('hex');

    let u;

    if(usernameOrEmail.indexOf('@') != -1) {
        // lookup by email
        const em = await db.queryIndex('Email', usernameOrEmail, 'EmailIndex');
        u = em ? await db.findById(em.Id) : null;
    } else {
        // lookup by username
        u = await db.findById(usernameOrEmail);
    }

    if (u && u.HashedPwd==hashedPwd) {
        return u.Id;
    }

    return null;
}