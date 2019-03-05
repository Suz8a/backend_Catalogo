const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const movie = require('../schemas/movie');

router.post('/',function(req,res){

    movie.create({
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        launchYear: req.body.launchYear
    },
    function(err, movie){
        if(err)
        return res.status(500).send("Problem adding information to database");
        res.status(200).send(movie);
    });
});

router.delete('/:id', function(req,res){

    movie.findByIdAndRemove(req.params.id, function(err,movie){
        if(err)return res.status(500).send("Problem deleting movie");
        res.status(200).send("movie: "+ movie.name + "deleted");
    });
});

router.get('/:id',function(req,res){
    
    movie.findById(req.params.id,function(err,movie){
        if(err)return res.status(500).send("Problem Finding movie");
        if(!movie)return res.status(404).send("movie not found");
        res.status(200).send(movie);
    });
});

//update movie

router.put('/:id', function(req,res){
    movie.findOneAndUpdate(req.params.id, req.body, {new:true},
        function(err, movie){
            if(err,movie)return res.status(500).send("There Problem updating movie<<si lo hace, errorFindAndModify is deprecated");
            res.status(200).send(movie);
        });
});

router.get('/',function(req,res){

    movie.find({},function(err, movies){
        if(err) return res.status(500).send("Problem finding movies")
        res.status(200).send(movies);
    });
});

module.exports = router;