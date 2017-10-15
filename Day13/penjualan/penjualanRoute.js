//global
let express = require('express');
let route = express.Router();
let penjualanController = require('./penjualanController.js');
route.get('/obat',function(req,res){
    penjualanController.getPenjualan(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/penjualan',function(req,res){
    let pnjln = req.body;
    penjualanController.createPenjualan(pnjln,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/penjualan/:_id',function(req,res){
    penjualanController.removePenjualan(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/penjualan/:_id',function(req,res){
    let pnjln = req.body;
    penjualanController.updatePenjualan(req.params._id,pnjln,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
module.exports = route;