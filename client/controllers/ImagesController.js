angular.module('photoAlbum.images', [])

.controller('ImagesController', function($scope) {
  $scope.images = imagesData;
  $scope.featImage = {};
  $scope.display = function(image) {
    $('.featImageDisplay').text('');
    console.log(image);
    $scope.featImage = image;
  };
});