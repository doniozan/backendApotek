let mong = require('mongoose');
let penjualan = mong.Schema({
    KdPenjualan:String,
    TanggalPenjualan:String,
    KdPetugas:String,
    KdToko:String,
    TotalHargaPenjualan:String,
    DetailPembelian:{
        KdObat:String,
        JmlObat:Number,
        TotalHarga:Number
    },
    NamaTipePembayaran:String,
    NamaStatusPembayaran:{
        JumlahPembayaran:Number,
        SisaPembayaran:Number
    }
});
let Penjualan = module.exports = mong.model("Penjualan",penjualan,"Penjualan");

