Propinsi = require('./propinsiModel.js');

module.exports.getPropinsi = function(callback,limit){
    Propinsi.find(callback).limit(limit);
}

module.exports.getPropinsiById = function(_id,callback){
    Propinsi.findById(_id,callback);
}

module.exports.createPropinsi = function(prpns,callback){
    Propinsi.create(prpns,callback);
}

module.exports.removePropinsi = function(_id,callback){
    Propinsi.findByIdAndRemove(_id,callback);
}

module.exports.updatePropinsiById = function(_id,prpns,callback){
    Propinsi.findByIdAndUpdate(_id,prpns,callback);
}