KodeAkses = require('./kodeAksesModel.js');

module.exports.getKodeAkses = function(callback,limit){
    KodeAkses.find(callback).limit(limit);
}
module.exports.getKodeAksesById = function(_id,callback){
    KodeAkses.findById(_id,callback);
}
module.exports.createKodeAkses = function(kdkss,callback){
    KodeAkses.create(kdkss,callback);
}
module.exports.removeKodeAkses = function(_id,callback){
    KodeAkses.findByIdAndRemove(_id,callback);
}
module.exports.updateKodeAkses = function(_id,kdkss,callback){
    KodeAkses.findByIdAndUpdate(_id,kdkss,callback);
}