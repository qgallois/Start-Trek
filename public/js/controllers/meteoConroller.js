function meteoController($scope, $http, meteoService) {
	$scope.title = "Liste de plats";

	function load() {
		meteoService.get().then(function (res) {
			$scope.meteos = res.data;
		});
	}
	$scope.add = function () {
		var data = {};
		meteoService.create(data).then(function (res) {
			load();
		});
		location.reload();
	}
	$scope.update = function (meteo) {
		meteoService.update(meteo._id, meteo).then(function (res) {
			load();
		});
	}

	$scope.delete = function (meteo) {
		meteoService.delete(meteo._id).then(function (res) {
			load();
		});
	}

	load();
}