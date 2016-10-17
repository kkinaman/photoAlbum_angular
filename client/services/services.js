angular.module('photoAlbum.services', [])

.factory('PhotoFactory', function($http) {
  return {
    getAll: function() {
      return $http({
        method: 'GET',
        url: '/api/photos'
      }).then(function(resp) {
        return resp.data;
      })
    },
    addOne: function(photo) {
      return $http({
        method: 'POST',
        url: '/api/photos',
        data: photo
      }).then(function(resp) {
        return resp;
      })
    }
  }
});