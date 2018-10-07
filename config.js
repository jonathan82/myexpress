const env = process.env.NODE_ENV;

const dev = {
    port: parseInt(process.env.PORT) || 3000,
    awsAccessKey: process.env.AWS_ACCESS_KEY,
    awsSecretKey: process.env.AWS_SECRET_KEY,
    awsRegion: process.env.AWS_REGION || 'us-west-1',
    jwtSecretKey: process.env.JWT_SECRET_KEY
}

const prod = {
    port: parseInt(process.env.PORT) || 80,
    awsRegion: process.env.AWS_REGION || 'us-west-1',
    jwtSecretKey: process.env.JWT_SECRET_KEY
}

const config = {
    dev,
    prod
}

module.exports = config[env]