var mongoose = require('mongoose');


var meteoSchema = new mongoose.Schema({
	description: String
});

var Meteo = {
	model: mongoose.model('Meteo', meteoSchema),
	create: function (req, res) {
		Meteo.model.create({

		}, function () {
			res.sendStatus(200);
		})
	},

	findAll: function (req, res) {
		Meteo.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function (req, res) {
		Meteo.model.findByIdAndUpdate(req.params.id, {
			
		}, function () {
			res.sendStatus(200);
		})
	},

	delete: function (req, res) {
		Meteo.model.findByIdAndRemove(req.params.id, function () {
			res.sendStatus(200);
		})
	}
}

module.exports = Meteo;