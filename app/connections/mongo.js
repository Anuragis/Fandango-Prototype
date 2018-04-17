var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://cmpeuser:cmpepass@ds261828.mlab.com:61828/FandangoSystem';

exports.connect = function(callback){
    MongoClient.connect(url,function(err,db){
        if(err){
            throw err;
        }
        //console.log("DB Instance : ",db);
        callback(err,db);
    });
}