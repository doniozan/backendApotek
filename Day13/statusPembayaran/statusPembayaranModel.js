let mong = require('mongoose');
let statuspembayaran = mong.Schema({
    kdStatusPembayaran:String,
    NamaStatusPembayaran:String
});
let StatusPembayaran = module.exports = mong.model("StatusPembayaran",statuspembayaran,"StatusPembayaran");