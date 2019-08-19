var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var Userschema = new mongoose.Schema({

	username: { 
		type: 'String' 
	},
	tos_accepted: {
		type: 'Boolean'
	},
	whitelisted: {
		type: 'Boolean'
	},
	referredby: {
		type: 'String'
	}
},
{
  timestamps: true
});
var User = mongoose.model('User', Userschema);

Promise.promisifyAll(User)
Promise.promisifyAll(User.prototype)

exports.User = User