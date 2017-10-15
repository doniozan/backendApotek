let express = require('express');
let route = express.Router();
let tokoController = require('./tokoController.js');
route.get('/toko',function(req,res){
    tokoController.getToko(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/toko/:_id',function(req,res){
	let id = req.params._id;
    tokoController.getTokoById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/toko',function(req,res){
    let tk = req.body;
    tokoController.createToko(tk,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/toko/:_id',function(req,res){
    tokoController.removeToko(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/toko/:_id',function(req,res){
    let tk = req.body;
    tokoController.updateToko(req.params._id,tk,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;