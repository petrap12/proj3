"use strict";

angular.module("MyApp", []);

angular.module("MyApp").controller("CreateLoginController",
function($scope, LoginResourse, toastr) {
	$scope.thisUser = {
		$scope.username = '';
		$scope.password = '';
	};

	$scope.onSave = function() {
		LoginResource.createLogin(thisUser);
	};
});

angular.module("MyApp").factory("LoginResource",
function($http) {
	return {
		createLogin: function(template){
			$http.post("http://dispatch.hir.is/h14/api/v1/login", {user: $scope.username, pass: $scope.password})
			.success (function(data) {
			$scope.thisUser = data;
			$scope.token = $scope.thisUser.Token;
			console.log("here");
			return true;
		});

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

/*angular.module('MyApp', []);

MyApp.$controller('loginController', ['$scope', '$http', function($scope, $http) {
	$scope.username = '';
	$scope.password = '';
	$scope.token = '';

	$scope.login = function() {
		$http.post("http://dispatch.hir.is/h14/api/v1/login", {user: $scope.username, pass: $scope.password})
		.success (function(data) {
			$scope.thisUser = data;
			$scope.token = $scope.thisUser.Token;
			console.log("here");
			return true;
		});
	};
}]);*/