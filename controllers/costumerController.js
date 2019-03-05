const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const costumer = require('../schemas/costumer');

//newCostumer
router.post('/',function(req,res){
    console.log('Entró post');
    costumer.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    },
    function(err, costumer){
        if(err)
        return res.status(500).send("Problem adding information to database");
        res.status(200).send(costumer);
    });
});

router.delete('/:id', function(req,res){

    costumer.findByIdAndRemove(req.params.id, function(err,costumer){
        if(err)return res.status(500).send("Problem deleting costumer");
        res.status(200).send("Costumer: "+ costumer.name + "deleted");
    });
});

router.get('/:id',function(req,res){
    
    costumer.findById(req.params.id,function(err,costumer){
        if(err)return res.status(500).send("Problem Finding costumer");
        if(!costumer)return res.status(404).send("costumer not found");
        res.status(200).send(costumer);
    });
});

//update costumer

router.put('/:id', function(req,res){
    costumer.findByIdAndUpdate(req.params.id, req.body, {new:true},
        function(err, costumer){
            if(err,costumer)return res.status(500).send("There Problem updating costumer<<si lo hace, errorFindAndModify is deprecated");
            res.status(200).send(costumer);
        });
});


//get all costumers
router.get('/',function(req,res){

    costumer.find({},function(err, costumers){
        if(err) return res.status(500).send("Problem finding costumers")
        res.status(200).send(costumers);
    });
});


module.exports = router;