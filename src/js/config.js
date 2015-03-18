angular.module('EvalClient', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/login', { templateUrl: 'src/View/login.html', controller: 'loginController' })
			/*.when('/rooms/:user/', { templateUrl: 'Views/rooms.html', controller: 'RoomsController' })
			.when('/room/:user/:room/', { templateUrl: 'Views/room.html', controller: 'RoomController' })*/
			.otherwise({
	  			redirectTo: 'src/View/login.html'
			});
	}
]);