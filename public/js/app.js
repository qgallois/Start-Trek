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
	.when('/meteo', {
		templateUrl: 'views/meteo.html',
		controller: 'meteoController',
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
	.controller('meteoController', meteoController)
	.service('accueilService', accueilService)
	.service('carteService', carteService)
	.service('meteoService', meteoService)

	/*CHARGEMENT IMAGE*/
	.config(['flowFactoryProvider', function (flowFactoryProvider) {
		flowFactoryProvider.defaults = {
			target: '/upload',
			permanentErrors:[404, 500, 501]
		};
		// You can also set default events:
		flowFactoryProvider.on('catchAll', function (event) {
			console.log('catchAll', arguments);
		});
		// Can be used with different implementations of Flow.js
		// flowFactoryProvider.factory = fustyFlowFactory;
	}])
/*.factory('', )*/
	.run(run);