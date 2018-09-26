const env = process.env.NODE_ENV;

const dev = {
    app: {
        port: 3000
    }
}

const prod = {
    app: {
        port: 80
    }
}

const config = {
    dev,
    prod
}

module.exports = config[env]