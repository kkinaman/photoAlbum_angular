var Photo = require('./db-config.js');

exports.fetchPhotos = function(req, res) {
  Photo.find({}, function(err, photos) {
    res.status(200).send(photos);
  })
};

exports.addPhoto = function(req, res) {
  Photo.create(req.body, function(err, photo) {
    if (err) {
      console.log(err);
    } else {
      res.status(201).send(photo);
    }
  })
};

exports.updateRating = function(req, res) {
  Photo.findOneAndUpdate({url: req.body.url}, {rating: req.body.rating}, function(err, photo) {
    res.status(201).send(photo);
  });
}