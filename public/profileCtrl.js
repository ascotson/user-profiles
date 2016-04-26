angular.module('userProfiles')
.controller('profileCtrl', function($scope, userInfo) {
	console.log(userInfo);
	$scope.currentUser = userInfo.data.currentUser;	//.data is used here since we did NOT parse out the config & headers in the service.
	$scope.friends = userInfo.data.friends;
});
