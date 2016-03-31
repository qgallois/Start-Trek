// CARTE SERVICE
function carteService($http) {
    return {
        get : function() {
            return $http.get('/cartes');
        },
        update : function(id, data){
            return $http.put('/cartes/' + id, data);
        },
        create : function(data) {
            return $http.post('/cartes', data);
        },
        delete : function(id) {
            return $http.delete('/cartes/' + id);
        }
    }
};
