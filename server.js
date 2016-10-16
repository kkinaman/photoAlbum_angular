var express = require('express');
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost/photoAlbum');

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/routes.js')(app, express);

console.log('Listening on port 8000');
app.listen(8000);

module.exports = app;