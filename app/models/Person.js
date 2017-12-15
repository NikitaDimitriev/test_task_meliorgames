var mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
	firstName : {type : String, default: ''},
	lastName : {type : String, default: '' },
	position : {type : String, default: ''}
});
