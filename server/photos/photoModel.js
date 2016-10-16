var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PhotoSchema = new Schema({
  url: String,
  name: String,
  rating: Number
});

module.exports = mongoose.model('Photo', PhotoSchema);