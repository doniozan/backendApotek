Penjualan = require('./penjualanModel.js');

module.exports.getPenjualan = function(callback,limit){
    Penjualan.find(callback).limit(limit);
}
module.exports.getPenjualanById = function(_id,callback){
    Penjualan.findById(_id,callback);
}
module.exports.createPenjualan = function(pnjln,callback){
    Penjualan.create(bt,callback);
}
module.exports.removePenjualan = function(_id,callback){
    Penjualan.findByIdAndRemove(_id,callback);
}
module.exports.updatePenjualan = function(_id,pnjln,callback){
    Penjualan.findByIdAndUpdate(_id,pnjln,callback);
}