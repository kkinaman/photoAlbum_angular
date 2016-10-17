var express = require('express');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var path = require('path');

var handler = require('./server/request-handler');

var app = express();

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// require('./server/config/middleware.js')(app, express);

app.get('/photos', handler.fetchPhotos);
app.post('/photos', handler.addPhoto);

app.post('/photos/photo', handler.updateRating);

console.log('Listening on port 8000');
app.listen(8000);

module.exports = app;