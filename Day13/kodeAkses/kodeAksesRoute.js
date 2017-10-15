let express = require('express');
let route = express.Router();
let kodeAksesController = require('./kodeAksesController.js');
route.get('/kodeakses',function(req,res){
    kodeAksesController.getKodeAkses(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/kodeakses/:_id',function(req,res){
	let id = req.params._id;
    kodeAksesController.getKodeAksesById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/kodeakses',function(req,res){
    let kdkss = req.body;
    kodeAksesController.createKodeAkses(kdkss,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/kodeakses/:_id',function(req,res){
    kodeAksesController.removeKodeAkses(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/kodeakses/:_id',function(req,res){
    let kdkss = req.body;
    kodeAksesController.updateKodeAkses(req.params._id,kdkss,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;