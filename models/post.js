var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;

var Orderschema = new mongoose.Schema({
	link_id: { 
		type: Schema.Types.ObjectId, ref: 'Link' 
	},
	steem_username: {
		type: 'String'
	}
},
{
  timestamps: true
});
var Order = mongoose.model('Order', Orderschema);

Promise.promisifyAll(Order)
Promise.promisifyAll(Order.prototype)

exports.Order = Order