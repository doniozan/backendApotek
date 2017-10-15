let mong = require('mongoose');
let pelanggan = mong.Schema({
    KdPelanggan:String,
    NamaPelanggan:String,
    AlamatPelanggan:String,
    Kontak:{
        NoTelp:String,
        Deskripsi:String
    },
    PermintaanTeman:{
        KdPelanggan:String,
        Deskripsi:String
    }
});
let Pelanggan = module.exports = mong.model("Pelanggan",pelanggan,"Pelanggan");