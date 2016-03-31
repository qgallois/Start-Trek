// ROUTES CARTE
var Carte = require('../models/carte.js');
module.exports 	= function(app) {

	app.get('/cartes', Carte.findAll);
	app.post('/cartes', Carte.create);
	app.put('/cartes/:id', Carte.update);
	app.delete('/cartes/:id', Carte.delete);
    
}