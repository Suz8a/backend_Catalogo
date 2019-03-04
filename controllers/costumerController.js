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

router.get('/',function(req,res){

    costumer.find({},function(err, costumers){
        if(err) return res.status(500).send("Problem finding costumers")
        res.status(200).send(costumers);
    });
});


module.exports = router;