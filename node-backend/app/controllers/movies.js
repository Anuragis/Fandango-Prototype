var moviesModel = require('../models/moviesModel');
const {ObjectId} = require('mongodb');
var multer = require('multer');
var path = require('path');
const client = require('../connections/redis_cache');

const storage = multer.diskStorage({
        destination: 'public/data/moviesImages',
        filename: function (req, file, cb) {
           console.log("req inside" + req.params.mid); 
           cb(null, req.params.mid + path.extname(file.originalname))
        }
    });
    // create the multer instance that will be used to upload/save the file
    const upload = multer({ storage }).single('iFile');
module.exports.sImg = multer({ storage }).single('iFile');

module.exports.createMovie = function(req,res,next){   
        console.log('Inside movie creation');
        var newMovie = new moviesModel();
        console.log('req', req.body.cast);
        newMovie.movieTitle = req.body.movieTitle;
        newMovie.movieCategory = req.body.movieCategory;
        newMovie.trailerLink = req.body.trailerLink;
        newMovie.movieDescription = req.body.movieDescription;
        newMovie.cast = req.body.cast;
        newMovie.movieLength = req.body.movieLength;
        newMovie.releaseDate = req.body.releaseDate;
        newMovie.movieRating = req.body.movieRating;
        newMovie.moviePhoto = req.body.moviePhoto;
        newMovie.screen = req.body.screen;
        newMovie.reviews=null;
        newMovie.status="active";
        console.log('before save', newData);
        newMovie.save(function(err,movie) {
            
            if (err){
                console.log("Error in movie Creation");
                throw err;
            }
           
            res.send();
        })
}

module.exports.deleteMovie = function(req,res,next){
    console.log("req body for delete a movie", req.params);
    var mid =  req.params.mid;
    console.log("Movie Id in Delete:" ,mid);

    moviesModel.findOneAndUpdate({ _id : req.params.mid}, { $set : { status : 'cancel' } }, {new:true}, function(err, movie) {
        console.log("Movie id",mid);
        if (err)
            throw err;
        res.send();
    })
}


module.exports.getAllMovies = function(req,res,next){
    moviesModel.find({status:"active"}, function(err, movies) {

    if(err){
        console.log("Get movie error", err);
    }else{
        client.setex(req.url, 100, JSON.stringify(movies));
        res.send(JSON.stringify(movies));  
        }
    })
}

module.exports.getMovieByCategory =function(req,res,next){
    
    moviesModel.find({status:"active",movieCategory:req.params.category}, function(err, movies) {

    if(err){
        console.log("Get movie category error", err);
    }else{
        client.setex(req.url, 20, JSON.stringify(movies));
        res.send(JSON.stringify(movies));  
        }
    })
}


module.exports.getMovieById=function(req,res,next){
    console.log('Req Body', req.params);
    moviesModel.findOne({_id:req.params.mid,  status:"active"}, function(err, movie) {

    if(err){
        console.log("Get movie id error", err);
    }else{
        client.setex(req.url, 20, JSON.stringify(movie));
        res.send(JSON.stringify(movie));  
        }
    });
}


module.exports.updateMovie=function(req,res,next){
   
    var mid =  req.params.mid;
    if(req.file) {
        
            // profileImage = req.body.moviePhoto + path.extname(req.file.originalname);
            var values = {$set : {
                moviePhoto : req.params.mid + path.extname(req.file.originalname)}};
            moviesModel.findOneAndUpdate({ _id : req.params.mid},values, function(err, user) {
                console.log("Movie id",req.params.mid);
                if (err)
                    throw err;
                res.end();
            })
            
    } 
    else {

    moviesModel.findOneAndUpdate({ _id : req.params.mid}, { $set : { 
        movieTitle:req.body.movieTitle,
        movieCategory:req.body.movieCategory,
        movieCategory:req.body.movieCategory,
        trailerLink: req.body.trailerLink,
        movieDescription: req.body.movieDescription,
        cast: req.body.cast,
        movieLength: req.body.movieLength,
        releaseDate: req.body.releaseDate,
        movieRating: req.body.movieRating,
        screen:req.body.screen,
        reviews:req.body.reviews
    
    } }, {new:true}, function(err, movie) {
        console.log("Movie id",mid);
        if (err)
            throw err;
     
        res.end();
    })
    }
}

module.exports.getMovieByName=function(req,res,next){
    console.log("req body", req.params);
    moviesModel.find({movieTitle : req.params.moviename,status:"active"},function(err,movies){
        if(err){
            throw err;
        }else{
                res.send(movies);
        }
    });
    
}
