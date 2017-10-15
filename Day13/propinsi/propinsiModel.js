let mong = require('mongoose');
let propinsi = mong.Schema({
    kdProvinsi:String,
    NamaProvinsi:String,
    Kota:{
        KdKota:String,
        NamaKota:String,
        Kecamatan:{
            KdKecamatan:String,
            NamaKecamatan:String
        }
    }
});
let Propinsi = module.exports =  mong.model("Provinsi",propinsi,"Provinsi");