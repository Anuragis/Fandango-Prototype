var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://cmpeuser:cmpepass@ds247569.mlab.com:47569/fandango_system';

exports.connect = function(callback){
    MongoClient.connect(url,function(err,db){
        if(err){
            throw err;
        }
        //console.log("DB Instance : ",db);
        callback(err,db);
    });
}