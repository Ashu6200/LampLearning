const { Redis } = require("ioredis");

const redisCLient = () => {
    if (process.env.REDIS_URL) {
        console.log('Redis is connected');
        return process.env.REDIS_URL;
    }
    throw new Error('Redis is not connected');
};

const redis = new Redis(redisCLient())
module.exports = { redis }