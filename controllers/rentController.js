const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const rent = require('../schemas/rent');

router.post('/',function(req,res){

    rent.create({
        rentDay: req.body.rentDay,
        rentMonth: req.body.rentMonth,
        rentYear: req.body.rentYear,
        costumerId:req.body.costumerId,
        movieId: req.body.movieId
    },
    function(err, rent){
        if(err)
        return res.status(500).send("Problem adding information to database");
        res.status(200).send(rent);
    });
});

router.get('/',function(req,res){

    rent.find({},function(err, rents){
        if(err) return res.status(500).send("Problem finding rents")
        res.status(200).send(rents);
    });
});

module.exports = router;