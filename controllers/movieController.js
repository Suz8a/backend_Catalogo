const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json);

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

router.get('/',function(req,res){

    movie.finc({},function(err, movies){
        if(err) return res.status(500).send("Problem finding movies")
        res.status(200).send(movies);
    });
});

module.exports = router;