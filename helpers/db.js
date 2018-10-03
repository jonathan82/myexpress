const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update({
    region: config.awsRegion,
    accessKeyId: config.awsAccessKey,
    secretAccessKey: config.awsSecretKey
});

const db = new AWS.DynamoDB.DocumentClient();

module.exports.create = async function (tableName, item) {
    const req = db.put({
        TableName: tableName,
        Item: item
    });

    return await req.promise();
}

