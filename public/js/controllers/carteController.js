// CARTE CONTROLLER

function carteController($scope, NgMap) {
	$scope.title = "Parcours";

	NgMap.getMap().then(function(map) {
	    console.log(map.getCenter());
	    console.log('markers', map.markers);
	    console.log('shapes', map.shapes);
	  });

	
}
