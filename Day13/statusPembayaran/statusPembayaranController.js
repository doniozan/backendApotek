StatusPembayaran = require('./statusPembayaranModel.js');

module.exports.getStatusPembayaran = function(callback,limit){
    StatusPembayaran.find(callback).limit(limit);
}
module.exports.getStatusPembayaranById = function(_id,callback){
    StatusPembayaran.findById(_id,callback);
}
module.exports.createStatusPembayaran = function(sttspmbyrn,callback){
    StatusPembayaran.create(sttspmbyrn,callback);
}
module.exports.removeStatusPembayaran = function(_id,callback){
    StatusPembayaran.findByIdAndRemove(_id,callback);
}
module.exports.updateStatusPembayaran = function(_id,sttspmbyrn,callback){
    StatusPembayaran.findByIdAndUpdate(_id,sttspmbyrn,callback);
}