angular.module('photoAlbum', [
  'photoAlbum.images',
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'ImagesController',
    });
});