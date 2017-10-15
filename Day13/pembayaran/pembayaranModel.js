let mong = require('mongoose');
let pembayaran = mong.Schema({
    KdPelanggan:String,
    KdPembelian:String,
    TanggalPembelian:String,
    StatusPembayaran:String,
    HargaBayar:Number,
    TanggalPembayaran:String,
    NamaStatusPenjualan:String,
    Histori:{
    	TglBeli:String,
    	TglKonfirmasi:String,
    	TglBayar:String
    }
});
let Pembayaran = module.exports = mong.model("Pembayaran",pembayaran,"Pembayaran");