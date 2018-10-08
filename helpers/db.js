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

module.exports.findById = async function(id) {
    const req = doc.get({
        TableName: TABLE_NAME,
        Key: {
            Id: id
        }
    });

    const data = await req.promise();
    
    return data.Item;
}

module.exports.queryIndex = async function(key,value,indexName) {
    const req = doc.query({
        TableName: TABLE_NAME,
        IndexName: indexName,
        KeyConditionExpression: `${key} = :hkey`,
        ExpressionAttributeValues: {
            'hkey': value
        },
        Limit: 1
    });

    const data = await req.promise();

    return data.Items ? data.Items[0] : null;
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
