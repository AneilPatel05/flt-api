var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;
var Messageschema = new mongoose.Schema({
	order_id: { 
		type: Schema.Types.ObjectId, ref: 'Order' 
	},
	ad_id: { 
		type: Schema.Types.ObjectId, ref: 'Advertisement' 
	},
	createdby: {
		type: 'String'
	},
	createdfor: {
		type: 'String'
	},
	message_type: {
		type: 'String'
	},
	message_text: {
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