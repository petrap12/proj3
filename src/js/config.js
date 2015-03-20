var EvalApp = angular.module('EvalApp', ['ngRoute']);

EvalApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/login', { templateUrl: 'src/View/login.html', controller: 'src/js/loginController.js' })
		.when('/admin', { templateUrl: 'src/View/createTemplate.html', controller: 'src/js/templateController.js' })
		.otherwise({
			redirectTo: '/login'
		});
	}
]);

