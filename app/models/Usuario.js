/**
 * Created by Macias on 14/10/14.
 */
var mongoose = require('mongoose');

var Usuario = mongoose.Schema({
    nombre:String,
    edad:Number
});

module.exports = exports = Usuario;
