function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/accueil.html',
		controller: 'accueilController',
	})
	.when('/carte', {
		templateUrl: 'views/carte.html',
		controller: 'carteController',
	})
	.otherwise({
		redirectTo: '/'
	});
}

function run($rootScope, $location) {
	var path = function () {
		return $location.path();
	};
	$rootScope.$watch(path, function (newVal, oldVal) {
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute','ngMap'])
	.config(config)
	.controller('accueilController', accueilController)
	.controller('carteController', carteController)
	.service('accueilService', accueilService)
	.service('carteService', carteService)
	
/*.factory('', )*/
	.run(run);