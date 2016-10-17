angular.module('photoAlbum', [
  'photoAlbum.images',
  'photoAlbum.services',
  'ngRoute'
])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'ImagesController',
    });
});