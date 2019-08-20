var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var Messageschema = new mongoose.Schema({
	link_id: { 
		type: Schema.Types.ObjectId, ref: 'Order' 
	},
	user: {
		type: 'String'
	},
	link_type: {
		type: 'String'
	},
	link_text: {
		type: 'String'
	}
},
{
  timestamps: true
});
var Message = mongoose.model('Message', Messageschema);

Promise.promisifyAll(Message)
Promise.promisifyAll(Message.prototype)

exports.Message = Message