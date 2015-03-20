var EvalApp = angular.module('EvalApp', ['ngRoute']);

angular.module('ChatClient').controller('LoginController', [
'$scope', '$location', '$rootScope', '$routeParams', 'socket',    
function ($scope, $location, $rootScope, $routeParams, socket) {

EvalApp.controller('loginController', ['$scope', 'LoginResourse', '$location'
function($scope, LoginResource, $location) {
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

				$location.path('/admin' + $scope.username);
				$scope.thisUser = data;
				$scope.token = $scope.thisUser.Token;
				return true;
			});
		}
	};
});








