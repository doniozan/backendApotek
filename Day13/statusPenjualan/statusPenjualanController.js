StatusPenjualan = require('./statusPenjualanModel.js');

module.exports.getStatusPenjualan = function(callback,limit){
    StatusPenjualan.find(callback).limit(limit);
}
module.exports.getStatusPenjualanById = function(_id,callback){
    StatusPenjualan.findById(_id,callback);
}
module.exports.createStatusPenjualan = function(sttspnjln,callback){
    StatusPenjualan.create(sttspnjln,callback);
}
module.exports.removeStatusPenjualan = function(_id,callback){
    StatusPenjualan.findByIdAndRemove(_id,callback);
}
module.exports.updateStatusPenjualan = function(_id,sttspnjln,callback){
    StatusPenjualan.findByIdAndUpdate(_id,sttspnjln,callback);
}