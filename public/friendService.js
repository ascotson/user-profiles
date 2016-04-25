angular.module('userProfiles')
.service('friendService', function($http) {

  this.login = function(user){
    return $http({
      method: 'POST',
      data: user,
      url: '/api/login'
    });
  };

  this.getFriends = function() {
    return $http({
      method: 'GET',
      url: '/api/profiles'
    })
      .then(function(response){   //Why do I have to parse the data with a .then here when console logging still gives the data? Is it in a different data format structure without a .then?
        return response.data;     //Do all GET's require a .then? Can I just use the .then in the controller instead? (Which wont even matter once controllers are deprecated in 2.0).
      });
  };

});
