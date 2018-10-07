const db = require('../helpers/db');
const crypto = require('crypto');

module.exports.create = async function (user) {

    const hashedPwd = crypto.createHash('sha256').update(user.password).digest('hex');

    await db.create({
        Id: user.username,
        Email: user.email,
        HashedPwd: hashedPwd,
        Phone: user.phone,
        VerifiedPhone: false
    });
}

module.exports.authenticate = async function(username,password) {
    const hashedPwd = crypto.createHash('sha256').update(password).digest('hex');

    const u = await db.get(username);

    if (u && u.HashedPwd==hashedPwd) {
        return true;
    }

    return false;
}