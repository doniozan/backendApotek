//global
let express = require('express');
let route = express.Router();
let tipePembayaranController = require('./tipePembayaranController.js');
route.get('/tipepembayaran',function(req,res){
    tipePembayaranController.getTipePembayaran(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/tipepembayaran/:_id',function(req,res){
	let id = req.params._id;
    tipePembayaranController.getTipePembayaranById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/tipepembayaran',function(req,res){
    let tppmbyrn = req.body;
    tipePembayaranController.createTipePembayaran(tppmbyrn,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/tipepembayaran/:_id',function(req,res){
    tipePembayaranController.removeTipePembayaran(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/tipepembayaran/:_id',function(req,res){
    let tppmbyrn = req.body;
    tipePembayaranController.updateTipePembayaran(req.params._id,tppmbyrn,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
module.exports = route;