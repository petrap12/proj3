'use strict';
var EvalApp = angular.module('EvalApp', ['ngRoute']);

EvalApp.controller('loginController', ['$scope', 'LoginResourse',
function($scope, LoginResource) {
	$scope.username = '';
	$scope.password = '';

	$scope.login = function() {
		console.log("login");
		LoginResource.createLogin($scope.username, $scope.password);
	};
}]);

EvalApp.factory('LoginResource',
function($http, $location, $scope) {
	return {
		createLogin: function(username, password){
			$http.post('http://dispatch.hir.is/h14/api/v1/login', {user: username, pass: password})
			.success (function(data) {

				$location.path('/home/' + $scope.username);
				$scope.thisUser = data;
				$scope.token = $scope.thisUser.Token;
				return true;
			});
		}
	};
});








