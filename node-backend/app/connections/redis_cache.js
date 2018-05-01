const redis = require('redis');
const REDIS_PORT = 6379;
const client = redis.createClient(REDIS_PORT, {'return_buffers': true});

module.exports = client;