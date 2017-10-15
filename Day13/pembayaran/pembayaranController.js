Pembayaran = require('./pembayaranModel.js');

module.exports.getPembayaran = function(callback,limit){
    Pembayaran.find(callback).limit(limit);
}
module.exports.getPembayaranById = function(_id,callback){
    Pembayaran.findById(_id,callback);
}
module.exports.createPembayaran = function(pmbyrn,callback){
    Pembayaran.create(pmbyrn,callback);
}
module.exports.removePembayaran = function(_id,callback){
    Pembayaran.findByIdAndRemove(_id,callback);
}
module.exports.updatePembayaran = function(_id,pmbyrn,callback){
    Pembayaran.findByIdAndUpdate(_id,pmbyrn,callback);
}