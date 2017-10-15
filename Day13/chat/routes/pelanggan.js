let express = require('express');
let routes = express.Router();

routes.get('/',function(req,res,next){
    res.render("../views/pelanggan/index.pug");
});

module.exports = routes;