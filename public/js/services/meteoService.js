function meteoService($http) {
    return {
        get : function() {
            return $http.get('/meteos');
        },
        update : function(id, data){
            return $http.put('/meteos/' + id, data);
        },
        create : function(data) {
            return $http.post('/meteos', data);
        },
        delete : function(id) {
            return $http.delete('/meteos/' + id);
        }
    }
};