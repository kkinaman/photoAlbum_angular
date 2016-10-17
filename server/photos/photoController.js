var Photo = require('./photoModel.js');
var Q = require('q');
var Promise = require('bluebird');

var findPhoto = Q.nbind(Photo.findOne, Photo);
var createPhoto = Q.nbind(Photo.create, Photo);
var findAllPhotos = Q.nbind(Photo.find, Photo);

module.exports = {

  allPhotos: function(res, req, next) {
    findAllPhotos({})
      .then(function(photos){
        res.json(photos);
      })
      .fail(function(err) {
        next(err);
      });
  },

  newPhoto: function(res, req, next) {
    console.log('IN PHOTO CONTROLLER, ADDING PHOTO TO DB');
    createPhoto(req.body)
      .then(function(createdPhoto) {
        if (createdPhoto) {
          res.json(createdPhoto);
        }
      }).fail(function (error) {
        next(error);
      });
  }
};