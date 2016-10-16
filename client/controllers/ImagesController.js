angular.module('photoAlbum.images', [])

.controller('ImagesController', function($scope) {
  $scope.images = imagesData;
  $scope.featImage = {};
  $scope.addImageTitle = '';
  $scope.addImageUrl = '';

  $scope.display = function(image) {
    $('.featImageDisplay').text('');
    $scope.featImage = image;
    $('.featImageRating').text($scope.featImage.rating + ' out of 5');
    $('.dropdown').removeClass('hidden');
  };

  $scope.addNewImage = function() {
    // $scope.images.push({
    //   url: $scope.addImageUrl,
    //   name: $scope.addImageTitle,
    //   rating: 0
    // });
    imagesData.push({
      url: $scope.addImageUrl,
      name: $scope.addImageTitle,
      rating: 0
    });
    $scope.addImageTitle = '';
    $scope.addImageUrl = '';
  };

  $scope.changeRating = function(rating) {
    console.log('changing rating to', rating);
    $scope.featImage.rating = rating;
    $('.featImageRating').text($scope.featImage.rating + ' out of 5');
  }
});