let mong = require('mongoose');
let obat = mong.Schema({
    kdIndukObat:String,
    NamaIndukObat:String,
    KategoriObat:String,
    VariasiObat:{
        KdVariasiObat:String,
        NamaVariasiObat:String
    }
});
let Obat = module.exports = mong.model("Obat",obat,"Obat");

