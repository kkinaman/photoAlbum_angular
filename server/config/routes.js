var photoController = require('../photos/photoController');

module.exports = function(app, express) {
  app.get('/api/photos', photoController.allPhotos);
}