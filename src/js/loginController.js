"use strict";
angular.module("EvalApp", ["ngRoute"]);

angular.module("EvalApp").controller("loginController",
function($scope, LoginResourse, toastr) {
	$scope.thisUser = {
		username: '',
		password: ''
	};

	$scope.onSave = function() {
		LoginResource.createLogin(thisUser);
	};
});

angular.module("EvalApp").factory("LoginResource",
function($http) {
	return {
		createLogin: function(template){
			$http.post("http://dispatch.hir.is/h14/api/v1/login", {user: $scope.thisUser.username, pass: $scope.thisUser.password})
			.success (function(data) {
			$scope.thisUser = data;
			$scope.token = $scope.thisUser.Token;
			console.log("here");
			return true;
		});

		}
	};
});



/*
//This code is test, and might be better
angular.module('MyApp', []);

angular.module("MyApp").controller('loginController', ['$scope', '$http', function($scope, $http) {
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