angular.module('photoAlbum.images', [])

.controller('ImagesController', function($scope) {
  $scope.images = imagesData;
  $scope.featImage = {};
  $scope.display = function(image) {
    $('.featImageDisplay').text('');
    $scope.featImage = image;
    $('.featImageRating').text($scope.featImage.rating + ' out of 5');
  };
});