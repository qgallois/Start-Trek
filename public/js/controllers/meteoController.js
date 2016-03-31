function meteoController($scope, $http, meteoService) {
	
	$scope.title = "Météo";

	var apikey = "6cca296a7ecccabc4364c69b9460e527";
    
        $scope.loadWeather = function() {
            var link = "http://api.openweathermap.org/data/2.5/weather?q=" + $scope.MyCity + "&APPID=" + apikey + "&units=metric";
            
            var request = new XMLHttpRequest();
            request.open('GET', link, false);
            request.send(null);
            
            if (request.status == 200) {
                var response = JSON.parse(request.responseText);
                document.getElementById('weather').innerHTML =
                    "Météo de " + response['name'] + " :<br />" +
                    "<img src='http://openweathermap.org/img/w/" + response['weather'][0]['icon'] + ".png' style='margin-right:15px;float:left;' />" +
                    "T°: " + response['main']['temp'] + "°C<br />" +
                    "Min: " + response['main']['temp_min'] + "°C<br />" +
                    "Max: " + response['main']['temp_max'] + "°C";
            } 
            else {
                document.getElementById('weather').innerHTML = "Quelque chose n'a pas fonctionné.";
            };
        }

        $scope.towns = [
        	{
        		"id" : 1,
        		"name" : "La Loupe",
        		"int" : "",
        		"ext" : "http://www.laloupe-tourisme.com/sortir1.php?lg=fr"
        	},
        	{
        		"id" : 2,
        		"name" : "Nogent-le-Rotrou",
        		"int" : "",
        		"ext" : "http://www.nogentlerotrou-tourisme.fr/activites-de-loisirs-1/index.php"
        	},
        	{
        		"id" : 3,
        		"name" : "Senonches",
        		"int" : "",
        		"ext" : "http://www.senonches-tourisme.com/randonnees/"
        	},
        	{
        		"id" : 4,
        		"name" : "Dreux",
        		"int" : "",
        		"ext" : "http://www.ot-dreux.fr/decouvrez-visitez/activites-et-loisirs"
        	}


        ];

        $scope.tMini

        $scope.select = function(town) {
        	$scope.town.sortieInt = false;
        	if (tMini > temp.indexof(name)) {
        		$scope.town.sortieInt = true;
        	}
        };
}
// http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=6cca296a7ecccabc4364c69b9460e527