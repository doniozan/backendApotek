let mong = require('mongoose');
let tipepembayaran = mong.Schema({
    kdTipePembayaran:String,
    NamaTipePembayaran:String
});
let TipePembayaran = module.exports = mong.model("TipePembayaran",tipepembayaran,"TipePembayaran");