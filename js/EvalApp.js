angular.module("EvalApp", ["ngRoute"]);

angular.module("EvalApp"). constant("SERVER_URL", "http://dispatch.hir.is/h14/api/v1/");

angular.module("EvalApp").controller("TemplatesController",
function($scope, TemplatesResource) {
	TemplatesResource.getTemplates().success(function(data) {
			$scope.templates = data;
	});
});

angular.module("EvalApp").controller("LoginController",
function($scope, LoginResource) {
	LoginResource.getLogin().success(function(data) {
			$scope.user = data;
	});
});

angular.module("EvalApp").factory("TemplatesResource",
function($http, SERVER_URL) {
	return {
		getTemplates: function () {
			return $http.get(SERVER_URL + "evaluationtemplates");
		},
		getTemplateByID: function(id){
			return $http.get(SERVER_URL + "evaluationtemplates/:id", {id:ID});
		},
		addTemplate: function(template) {
			$http.post(SERVER_URL + "evaluationtemplates", undefined, template)
		}
	};
});

angular.module("EvalApp").factory("LoginResource",
function($http, SERVER_URL) {
	return {
		getLogin: function() {
			$http.post(SERVER_URL + "login", data)
		}
	};
});