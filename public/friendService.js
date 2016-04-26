angular.module('userProfiles')
.service('friendService', function($http) {

  this.login = function(user){
    return $http({
      method: 'POST',
      url: '/api/login',
      data: user
    });
  };

  this.getFriends = function() {
    return $http({
      method: 'GET',
      url: '/api/profiles'
    });
      // .then(function(response){  //Could optionally use a .then here to parse the config & headers from the incoming server data which is unnecessary extraneous data for our front end app.
      //   return response.data;    //response.data contains the server data we want.
      // });
  };

});
