//global
let express = require('express');
let route = express.Router();
let statusPembayaranController = require('./statusPembayaranController.js');
route.get('/statuspembayaran',function(req,res){
    statusPembayaranController.getStatusPembayaran(function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.get('/statuspembayaran/:_id',function(req,res){
	let id = req.params._id;
    statusPembayaranController.getStatusPembayaranById(id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.post('/statuspembayaran',function(req,res){
    let sttspmbyrn = req.body;
    statusPembayaranController.createStatusPembayaran(sttspmbyrn,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.delete('/statuspembayaran/:_id',function(req,res){
    statusPembayaranController.removeStatusPembayaran(req.params._id,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
route.put('/statuspembayaran/:_id',function(req,res){
    let sttspmbyrn = req.body;
    statusPembayaranController.updateStatusPembayaran(req.params._id,sttspmbyrn,function(err,respon){
        if(err){
            throw err;
        }
        res.json(respon);
    });
});
module.exports = route;