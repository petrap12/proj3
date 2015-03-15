"use strict";

angular.module("MyApp", []);

angular.module("MyApp").controller("CreateLoginController",
function($scope, LoginResourse, toastr) {
	var thisUser = {
		$scope.user = '';
		$scope.pass = '';
	};

	$scope.onSave = function() {
		LoginResource.createLogin(thisUser);
	};
});

angular.module("MyApp").factory("LoginResource",
function($http) {
	return {
		createLogin: function(template){
			//return $http.post()

		}
	};
});

/*angular.module('EvalClient').controller('LoginController', [
'$scope', '$location', '$rootScope', '$routeParams', 'socket',    
function ($scope, $location, $rootScope, $routeParams, socket) {
	
	$scope.errorMessage = '';
	$scope.nickname = '';

	$scope.login = [function() {			
		if ($scope.nickname === '') {
			$scope.errorMessage = 'Please choose a nick-name before continuing!';
		} else {
			socket.emit('adduser', $scope.nickname, ['available', function (available) {
				if (available) {
					$location.path('/rooms/' + $scope.nickname);
				} else {
					$scope.errorMessage = 'This nick-name is already taken!';
				}
			}]);			
		}
	}];
}]);*/