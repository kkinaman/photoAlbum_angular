angular.module('photoAlbum.images', [])

.controller('ImagesController', function($scope, $http) {
  $scope.images = imagesData;
  $scope.featImage = {};
  // $scope.addImageTitle = '';
  // $scope.addImageUrl = '';

  var updatePhotoList = function () {
    $http({
      method: 'GET', 
      url: '/photos'
    }).then(function(resp) {
      console.log('GOT DATA');
      console.log(resp);
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
      console.log('POSTED DATA');
      $scope.display(newImage);
      $scope.addImageTitle = '';
      $scope.addImageUrl = '';
      updatePhotoList();
      return resp;
    });
    
  }

  // $scope.addNewImage = function() {
  //   // $scope.images.push({
  //   //   url: $scope.addImageUrl,
  //   //   name: $scope.addImageTitle,
  //   //   rating: 0
  //   // });
  //   imagesData.push({
  //     url: $scope.addImageUrl,
  //     name: $scope.addImageTitle,
  //     rating: 0
  //   });
  //   $scope.addImageTitle = '';
  //   $scope.addImageUrl = '';
  // };

  // $scope.changeRating = function(rating) {
  //   console.log('changing rating to', rating);
  //   $scope.featImage.rating = rating;
  //   $('.featImageRating').text($scope.featImage.rating + ' out of 5');
  // }

  $scope.changeRating = function(rating) {
    $scope.featImage.rating = rating;
    $http({
      method: 'POST',
      url: '/photos/photo',
      data: $scope.featImage
    }).then(function(resp) {
      console.log('UPDATED RATING');
      $('.featImageRating').text($scope.featImage.rating + ' out of 5');
      return resp;
    });
  }


});