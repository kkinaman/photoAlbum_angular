var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/photoAlbumDB');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db open!');
});

var photoSchema = new Schema({
  url: String,
  name: String,
  rating: Number
});

module.exports = mongoose.model('Photo', photoSchema);