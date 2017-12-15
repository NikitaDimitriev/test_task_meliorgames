module.exports = function (app) {


	var mongoose = require('mongoose');
	var Person = require('./models/Person');

	app.post('/api/person', function (req, res) {
		console.log('body:', req.body);
		Person.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			position: req.body.position
		},
			function (err, Person) {
				if (err) console.log(err);
				res.json(Person);
			});
	});

	app.get('/api/persons', function (req, res) {
		Person.find(function (err, persons) {
			if (err) console.log('error:', err);
			res.json(persons);
		});
	});

	app.post('/api/delete-persons', function (req, res) {
		var ids = req.body;
		console.log(ids);
		for (i=0; i < ids.length; i++){

			Person.findByIdAndRemove(ids[i], function (err, person) {
				if (err) console.log(err);
			});
		}
		res.json(true);
	});

	app.get('/api/search', function(req, res, next){
		console.log('body:', req.query);
		Person.find({ firstName: new RegExp(req.query.title, "i")}, (err, person) => {
			if(err) return next(err);
			console.log('find', person);
			res.json(person);
		});
		
	});

	app.put('/api/person/:id', function(req, res){
		var id = req.body._id;
		Person.findByIdAndUpdate( {_id: id}, {
			$set: { 
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			position: req.body.position
			}
		},
			function (err, Person) {
				if (err) console.log(err);
				res.json(Person);
			});
	});

	app.get('/api/person/:id', function(req, res){
		var id = req.params.id;
		console.log(id);
		Person.findById( id, function (err, person) {
			  if (err) console.log(err);
			res.json(person);
		});
	});

	app.get('*', function (req, res) {
		res.sendfile('./public/index.html');
	});
};