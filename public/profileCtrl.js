angular.module('userProfiles')
.controller('profileCtrl', function($scope, $stateProvider) {
	$scope.currentUser = $stateProvider.resolve.currentUser();
	$scope.friends = $stateProvider.resolve.userInfo();
});
