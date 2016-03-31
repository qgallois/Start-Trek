// MODEL CARTE
var mongoose = require('mongoose');


var carteSchema = new mongoose.Schema({
	// entree: String,
	// meal: String,
	// dessert: String,
	// ingredients: String,
	// image: String,
	// category: String,
	// recipe:String,
	// stars:String
});

var Carte = {
	model: mongoose.model('Carte', carteSchema),
	create: function (req, res) {
		Carte.model.create({
			// category: req.body.category,
			// entree: req.body.entree,
			// meal: req.body.meal,
			// dessert: req.body.dessert,
			// ingredients: req.body.ingredients,
			// category: req.body.category,
			// image: req.body.image
		}, function () {
			res.sendStatus(200);
		})
	},

	findAll: function (req, res) {
		Carte.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function (req, res) {
		Carte.model.findByIdAndUpdate(req.params.id, {
			// entree: req.body.entree,
			// meal: req.body.meal,
			// dessert: req.body.dessert,
			// ingredients: req.body.ingredients,
			// category: req.body.category,
			// recipe: req.body.recipe,
			// stars: req.body.stars,
			// image: req.body.image
		}, function () {
			res.sendStatus(200);
		})
	},

	delete: function (req, res) {
		Carte.model.findByIdAndRemove(req.params.id, function () {
			res.sendStatus(200);
		})
	}
}

module.exports = Carte;
