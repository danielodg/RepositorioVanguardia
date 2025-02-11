const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjjectId = Schema.ObjectId;

const Gremio = new Schema({
name: String,
casa: String,
cantidad: Number,
status: Boolean
});

const Gremios = mongoose.model('Gremio', Gremio);
module.exports = Gremios;