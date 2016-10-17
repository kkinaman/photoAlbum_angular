angular.module('photoAlbum.images', [])

.controller('ImagesController', function($scope, $http) {
  $scope.images = [];
  $scope.featImage = {};

  var updatePhotoList = function () {
    $http({
      method: 'GET', 
      url: '/photos'
    }).then(function(resp) {
      $scope.images = resp.data;
    });
  };

  updatePhotoList();

  $scope.display = function(image) {
    $('.featImageDisplay').text('');
    $scope.featImage = image;
    $('.featImageRating').text($scope.featImage.rating + ' out of 5');
    $('.dropdown').removeClass('hidden');
  };

  $scope.addNewImage = function() {
    var newImage = {
      url: $scope.addImageUrl,
      name: $scope.addImageTitle,
      rating: 0
    };
    $http({
      method: 'POST',
      url: '/photos',
      data: newImage
    }).then(function(resp) {
      $scope.display(newImage);
      $scope.addImageTitle = '';
      $scope.addImageUrl = '';
      updatePhotoList();
      return resp;
    });
  }

  $scope.changeRating = function(rating) {
    $scope.featImage.rating = rating;
    $http({
      method: 'POST',
      url: '/photos/photo',
      data: $scope.featImage
    }).then(function(resp) {
      $('.featImageRating').text($scope.featImage.rating + ' out of 5');
      return resp;
    });
  }

});