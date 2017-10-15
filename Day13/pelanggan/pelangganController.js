Pelanggan = require('./pelangganModel.js');

module.exports.getPelanggan = function(callback,limit){
    Pelanggan.find(callback).limit(limit);
}
module.exports.getPelangganById = function(_id,callback){
    Pelanggan.findById(_id,callback);
}
module.exports.createPelanggan = function(plnggn,callback){
    Pelanggan.create(plnggn,callback);
}
module.exports.removePelanggan = function(_id,callback){
    Pelanggan.findByIdAndRemove(_id,callback);
}
module.exports.updatePelanggan = function(_id,plnggn,callback){
    Pelanggan.findByIdAndUpdate(_id,plnggn,callback);
}