var EvalApp = angular.module('EvalApp', ['ngRoute']);

EvalApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'src/View/login.html', controller: 'LoginController' })
		.when('/admin', { templateUrl: 'src/View/createTemplate.html', controller: 'TemplateController' })
		.otherwise({
			redirectTo: '/login'
		});
	}
]);

