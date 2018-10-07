const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update({
    region: config.awsRegion,
    accessKeyId: config.awsAccessKey,
    secretAccessKey: config.awsSecretKey
});

const doc = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "SimbaMainTable";

module.exports.create = async function (item) {
    const req = doc.put({
        TableName: TABLE_NAME,
        Item: item,
        ConditionExpression: 'attribute_not_exists(Id)'
    });

    await req.promise();
}

module.exports.get = async function(id) {
    const req = doc.get({
        TableName: TABLE_NAME,
        Key: {
            Id: id
        }
    });

    const data = await req.promise();
    
    return data.Item;
}

module.exports.exists = async function (id) {
    const req = doc.get({
        TableName: TABLE_NAME,
        Key: {
            Id: id
        }
    });

    const data = await req.promise();

    return data.Item != null;
}
