let mong = require('mongoose');
let statuspenjualan = mong.Schema({
    kdStatusPenjualan:String,
    NamaStatusPenjualan:String
});
let StatusPenjualan = module.exports = mong.model("StatusPenjualan",statuspenjualan,"StatusPenjualan");