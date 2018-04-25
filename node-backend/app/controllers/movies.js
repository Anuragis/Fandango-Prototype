var moviesModel = require('../models/moviesModel');
const {ObjectId} = require('mongodb');


module.exports.createMovie = function(req,res,next){
    console.log("req body", req.body);
        var newMovie = new moviesModel();

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
        newMovie.reviews=req.body.reviews;
        newMovie.status="active";

        newMovie.save(function(err,movie) {
            console.log("Error in movie Creation");
            if (err){
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
    moviesModel.find({}, function(err, movies) {

    if(err){
        console.log("Get movie error", err);
    }else{
        var movieMap = [];
        movies.map(movie=>{
            var ob = {};
        if(movie.status==="active"){
            ob = {_id:movie._id,
                movieTitle:movie.movieTitle,
                movieCategory:movie.movieCategory,
                trailerLink: movie.trailerLink,
                movieDescription: movie.movieDescription,
                cast: movie.cast,
                movieLength: movie.movieLength,
                releaseDate: movie.releaseDate,
                movieRating: movie.movieRating,
                moviePhoto: movie.moviePhoto,
                screen:movie.screen,
                reviews:movie.reviews,
                status:movie.status
            };
                movieMap.push(ob);
            }
        });

        res.send(JSON.stringify(movieMap));  
        }
    })
}

module.exports.getMovieByCategory =function(req,res,next){
    
    moviesModel.find({}, function(err, movies) {

    if(err){
        console.log("Get movie category error", err);
    }else{
        var movieMap = [];
        movies.map(movie=>{
            var ob = {};
        if(movie.status==="active" && movie.movieCategory===req.params.category){
            ob = {_id:movie._id,
                movieTitle:movie.movieTitle,
                movieCategory:movie.movieCategory,
                trailerLink: movie.trailerLink,
                movieDescription: movie.movieDescription,
                cast: movie.cast,
                movieLength: movie.movieLength,
                releaseDate: movie.releaseDate,
                movieRating: movie.movieRating,
                moviePhoto: movie.moviePhoto,
                screen:movie.screen,
                reviews:movie.reviews,
                status:movie.status
            };
                movieMap.push(ob);
            }
        });

        res.send(JSON.stringify(movieMap));  
        }
    })
}


module.exports.getMovieById=function(req,res,next){

    moviesModel.findOne({_id:req.params.mid}, function(err, movie) {

    if(err){
        console.log("Get movie id error", err);
    }else{
        res.send(JSON.stringify(movie));  
        }
    })
}


module.exports.updateMovie=function(req,res,next){
   
    var mid =  req.params.mid;
   

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
        moviePhoto: req.body.moviePhoto,
        screen:req.body.screen,
        reviews:req.body.reviews
    
    } }, {new:true}, function(err, movie) {
        console.log("Movie id",mid);
        if (err)
            throw err;
     
        res.end();
    })
}