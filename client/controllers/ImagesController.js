angular.module('photoAlbum.images', [])

.controller('ImagesController', function($scope, PhotoFactory) {

  $scope.data = {};
  $scope.data.images = [];
  $scope.featImage = {};
  $scope.featImage.url = 'http://smartfamilypets.com/wp-content/uploads/2015/12/Pug-puppies-620x330.jpg';

  PhotoFactory.getAll().then(function(photos) {
    console.log('RETRIEVING PHOTOS');
    $scope.data.images = photos;
  });

  $scope.addNewImage = function() {
    alert('aasldfkjasldkf');
    console.log('ADDING IMAGE');
    var newImage = {
      url: $scope.addImageUrl,
      name: $scope.addImageTitle,
      rating: 0
    }
    console.log(JSON.stringify(newImage));
    PhotoFactory.addOne(newImage);
    $scope.addImageTitle = '';
    $scope.addImageUrl = '';
  }

  $scope.changeRating = function(rating) {
    console.log('changing rating to', rating);
    $scope.featImage.rating = rating;
    $('.featImageRating').text($scope.featImage.rating + ' out of 5');
  }
});