function config($routeProvider) {
	$routeProvider
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
angular.module('app', ['ngRoute','flow'])
	.config(config)

	.controller('meteoController', meteoController)
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