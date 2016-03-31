// ACCUEIL SERVICE
function accueilService($http) {
    return {
        get : function() {
            return $http.get('/accueils');
        },
        update : function(id, data){
            return $http.put('/accueils/' + id, data);
        },
        create : function(data) {
            return $http.post('/accueils', data);
        },
        delete : function(id) {
            return $http.delete('/accueils/' + id);
        }
    }
};