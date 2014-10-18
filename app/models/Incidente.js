/**
 * Created by Macias on 14/10/14.
 */
var mongoose = require('mongoose');
var Usuario = require('../models/Usuario.js')

var Incidente = mongoose.Schema({
 descripcion:{type: String, default:'Ninguno'},
 fechaCreacion:{type:Date},
 titulo:String,
 gravedad:{type:Number, enum:[1,2,3,4,5]},
 usuarioCreacion:String,
 zona:Number
});

module.exports = exports = Incidente;