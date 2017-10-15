Obat = require('./obatModel.js');

module.exports.getObat = function(callback,limit){
    Obat.find(callback).limit(limit);
}
module.exports.getObatById = function(_id,callback){
    Obat.findById(_id,callback);
}
module.exports.createObat = function(bt,callback){
    Obat.create(bt,callback);
}
module.exports.removeObat = function(_id,callback){
    Obat.findByIdAndRemove(_id,callback);
}
module.exports.updateObat = function(_id,bt,callback){
    Obat.findByIdAndUpdate(_id,bt,callback);
}