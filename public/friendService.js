angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      $http({
        method: POST,
        url: '..server.js/api/login'
      }).then(function(response) {
        return promise;
      });
    },

    getFriends: function() {
      $http({
        method: GET,
        url: '..server.js/api/profiles'
      }).then(function(response) {
        return promise;
      });
    }
  };
});
