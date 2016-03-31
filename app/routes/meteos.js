var Meteo = require('../models/meteo.js');
module.exports 	= function(app) {

	app.get('/meteos', Meteo.findAll);
	app.post('/meteos', Meteo.create);
	app.put('/meteos/:id', Meteo.update);
	app.delete('/meteos/:id', Meteo.delete);
    
}