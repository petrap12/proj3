"use strict";
angular.module("EvalApp", ["ngRoute"]);

angular.module("EvalApp").controller('loginController', ['$scope', 'LoginResourse',
function($scope, LoginResourse) {
	$scope.username = '';
	$scope.password = '';

	console.log("virkar");
	$scope.login = function() {
		console.log("login");
		LoginResource.createLogin($scope.username, $scope.password);
	};
}]);

angular.module("EvalApp").factory("LoginResource",
function($http, $location) {
	return {
		createLogin: function(username, password){
			$http.post("http://dispatch.hir.is/h14/api/v1/login", {user: username, pass: password})
			.success (function(data) {
				$location.path('/home/' + $scope.username);
				$scope.thisUser = data;
				$scope.token = $scope.thisUser.Token;
				console.log("here");
				return true;
			});

		}
	};
});




//This code is test, and might be better
/*angular.module('EvalApp', ["ngRoute"]);

angular.module("EvalApp").controller('loginController', ['$scope', '$http', function($scope, $http) {
	$scope.username = '';
	$scope.password = '';
	$scope.token = '';

	$scope.login = function() {
		$http.post("http://dispatch.hir.is/h14/api/v1/login", {user: $scope.username, pass: $scope.password})
		.success (function(data) {
			$scope.thisUser = data;
			$scope.token = $scope.thisUser.Token;
			return true;
		});
	};
}]);*/