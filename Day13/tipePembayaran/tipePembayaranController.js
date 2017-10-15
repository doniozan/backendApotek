TipePembayaran = require('./tipePembayaranModel.js');

module.exports.getTipePembayaran = function(callback,limit){
    TipePembayaran.find(callback).limit(limit);
}
module.exports.getTipePembayaranById = function(_id,callback){
    TipePembayaran.findById(_id,callback);
}
module.exports.createTipePembayaran = function(tppmbyrn,callback){
    TipePembayaran.create(tppmbyrn,callback);
}
module.exports.removeTipePembayaran = function(_id,callback){
    TipePembayaran.findByIdAndRemove(_id,callback);
}
module.exports.updateTipePembayaran = function(_id,tppmbyrn,callback){
    TipePembayaran.findByIdAndUpdate(_id,tppmbyrn,callback);
}