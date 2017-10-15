let mong = require('mongoose');
let kodeakses = mong.Schema({
    kdAkses:String,
    NamaAkses:String,
    Keterangan:String
});
let KodeAkses = module.exports = mong.model("KodeAkses",kodeakses,"KodeAkses");