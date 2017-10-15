//global
let express = require('express');
let route = express.Router();
let pembayaranController = require('./pembayaranController.js');
route.get('/pembayaran',function(req,res){
    pembayaranController.getPembayaran(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/pembayaran',function(req,res){
    let pmbyrn = req.body;
    pembayaranController.createPembayaran(pmbyrn,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/pembayaran/:_id',function(req,res){
    pembayaranController.removePembayaran(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/pembayaran/:_id',function(req,res){
    let pmbyrn = req.body;
    pembayaranController.updatePembayaran(req.params._id,pmbyrn,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
module.exports = route;