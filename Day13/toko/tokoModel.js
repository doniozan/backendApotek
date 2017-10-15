let mong = require('mongoose');
let toko = mong.Schema({
    kdToko:String,
    NamaToko:String,
    AlamatToko:String,
    NamaKota:String,
    NamaProvinsi:String,
    Gudang:{
        KdGudang:String,
        NamaGudang:String,
        AlamatGudang:String,
        LuasGudang:String,
        Stok:{
            KdObat:String,
            StokAwal:String,
            StokAkhir:String
        },
        LokasiiToko:{
            type:String,
            coordinates:[]
        }
    }
});
let Toko = module.exports = mong.model("Toko",toko,"Toko");