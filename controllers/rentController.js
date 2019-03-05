const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const rent = require('../schemas/rent');

router.post('/',function(req,res){

    rent.create({
        rentDay: req.body.rentDay,
        rentMonth: req.body.rentMonth,
        rentYear: req.body.rentYear,
        rentId:req.body.rentId,
        movieId: req.body.movieId
    },
    function(err, rent){
        if(err)
        return res.status(500).send("Problem adding information to database");
        res.status(200).send(rent);
    });
});

router.delete('/:id', function(req,res){

    rent.findByIdAndRemove(req.params.id, function(err,rent){
        if(err)return res.status(500).send("Problem deleting rent");
        res.status(200).send("rent: "+ rent.name + "deleted");
    });
});

router.get('/:id',function(req,res){
    
    rent.findById(req.params.id,function(err,rent){
        if(err)return res.status(500).send("Problem Finding rent");
        if(!rent)return res.status(404).send("rent not found");
        res.status(200).send(rent);
    });
});

//update rent

router.put('/:id', function(req,res){
    rent.findByIdAndUpdate(req.params.id, req.body, {new:true},
        function(err, rent){
            if(err,rent)return res.status(500).send("There Problem updating rent<<si lo hace, errorFindAndModify is deprecated");
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