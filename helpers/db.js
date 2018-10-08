const AWS = require('aws-sdk');
const config = require('../config');

AWS.config.update({
    region: config.awsRegion,
    accessKeyId: config.awsAccessKey,
    secretAccessKey: config.awsSecretKey
});

const doc = new AWS.DynamoDB.DocumentClient();

const MAIN_TABLE = "SimbaMainTable";
const PAGE_SIZE = 10;

module.exports.create = async function (item) {
    const req = doc.put({
        TableName: MAIN_TABLE,
        Item: item,
        ConditionExpression: 'attribute_not_exists(Id)'
    });

    await req.promise();
}

module.exports.findById = async function(id) {
    const req = doc.get({
        TableName: MAIN_TABLE,
        Key: {
            Id: id
        }
    });

    const data = await req.promise();
    
    return data.Item;
}

module.exports.queryIndex = async function(key,value,indexName) {
    const req = doc.query({
        TableName: MAIN_TABLE,
        IndexName: indexName,
        KeyConditionExpression: `${key} = :hkey`,
        ExpressionAttributeValues: {
            ':hkey': value
        },
        Limit: 1
    });

    const data = await req.promise();

    return data.Items ? data.Items[0] : null;
}

module.exports.queryPaged = async function(key, value, indexName, lastSeen) {
    const req = doc.query({
        TableName: MAIN_TABLE,
        IndexName: indexName,
        KeyConditionExpression: `${key} = :keyVal`,
        FilterExpression: 'Area2 = :area2Val',
        ExpressionAttributeValues: {
            ':keyVal': value,
            ':area2Val': ''
        },
        Limit: PAGE_SIZE,
        ExclusiveStartKey: lastSeen,
        ScanIndexForward: false //most recent date first
    });

    const data = await req.promise();
    
    return {
        items: data.Items,
        lastSeen: data.LastEvaluatedKey
    }    
}

module.exports.exists = async function (id) {
    const req = doc.get({
        TableName: MAIN_TABLE,
        Key: {
            Id: id
        }
    });

    const data = await req.promise();

    return data.Item != null;
}
