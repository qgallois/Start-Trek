// ACCUEIL CONTROLLER 

function accueilController($scope, $http, accueilService){
	$scope.title = "";

	function load(){
		accueilService.get().then(function(res){
			$scope.accueils = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		accueiService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
	}
	$scope.update = function(accueil){
		accueilService.update(accueil._id, accueil).then(function(res){
			load();
		});
	}
	$scope.delete = function(accueil){
		accueilService.delete(accueil._id).then(function(res){
			load();
		});
	}
	load();
}