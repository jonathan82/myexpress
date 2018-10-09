const db = require('../helpers/db');
const {genId} = require('../helpers/utils');

async function postsByArea(area, lastSeen) {
    return await db.queryPaged('Area1', area, 'PostsByArea1Index', lastSeen);
}

function postsBySubArea(area, subArea, lastSeen) {
    //db.queryPaged('Area2', )
}

async function postsByUser(username, lastSeen) {
    return await db.queryPaged('Id', username, 'PostsByUserIndex', lastSeen);
}

async function create(area, subArea, username, postText) {
    await db.create({
        Id: genId(),
        Area1: area,
        Area2: subArea,
        Username: username,
        DatePosted: new Date().toISOString(),
        Photos: [],
        PostText: postText
    });
}

exports.postsByArea = postsByArea;
exports.postsBySubArea = postsBySubArea;
exports.postsByUser = postsByUser;
exports.create = create;
