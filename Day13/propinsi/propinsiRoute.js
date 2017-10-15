let express = require('express');
let route = express.Router();
let propinsiController = require('./propinsiController.js');
route.get('/propinsi',function(req,res){
    propinsiController.getPropinsi(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/propinsi/:_id',function(req,res){
	let id = req.params._id;
    propinsiController.getPropinsiById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/propinsi',function(req,res){
    let prpns = req.body;
    propinsiController.createPropinsi(prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/propinsi/:_id',function(req,res){
    propinsiController.removePropinsi(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/propinsi/:_id',function(req,res){
    let prpns = req.body;
    propinsiController.updatePropinsiById(req.params._id,prpns,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;