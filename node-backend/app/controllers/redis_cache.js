const redis_client = require('../connections/redis_cache');

module.exports.cache = function(req, res, next) {
    redis_client.get(req.url, function (err, data) {
        if (err) throw err;

        if (data != null) {
			console.log("redis cached response");
            console.log(req.query);
            
            res.send(JSON.parse(data));
        } else {
			console.log("normal query response");
            next();
        }
    });
}