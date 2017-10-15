//global
let express = require('express');
let route = express.Router();
let statusPenjualanController = require('./statusPenjualanController.js');
route.get('/statuspenjualan',function(req,res){
    statusPenjualanController.getStatusPenjualan(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/statuspenjualan/:_id',function(req,res){
	let id = req.params._id;
    statusPenjualanController.getStatusPenjualanById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/statuspenjualan',function(req,res){
    let sttspnjln = req.body;
    statusPenjualanController.createStatusPenjualan(sttspnjln,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/statuspenjualan/:_id',function(req,res){
    statusPenjualanController.removeStatusPenjualan(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/statuspenjualan/:_id',function(req,res){
    let sttspnjln = req.body;
    statusPenjualanController.updateStatusPenjualan(req.params._id,sttspnjln,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
module.exports = route;