angular.module('MyApp', []);

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
}]);

/*angular.module("MyApp").factory("LoginResource",
function($http) {
	return {
		createLogin: function(template){
			//return $http.post()

		}
	};*/
