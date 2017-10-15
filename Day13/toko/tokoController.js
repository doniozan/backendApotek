Toko = require('./tokoModel.js');

module.exports.getToko = function(callback,limit){
    Toko.find(callback).limit(limit);
}
module.exports.getTokoById = function(_id,callback){
    Toko.findById(_id,callback);
}
module.exports.createToko = function(tk,callback){
    Toko.create(tk,callback);
}
module.exports.removeToko = function(_id,callback){
    Toko.findByIdAndRemove(_id,callback);
}
module.exports.updateToko = function(_id,tk,callback){
    Toko.findByIdAndUpdate(_id,tk,callback);
}