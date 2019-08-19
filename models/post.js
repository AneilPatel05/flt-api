var mongoose = require('mongoose');
var Promise = require('bluebird');
var Schema = mongoose.Schema;

var Orderschema = new mongoose.Schema({
	ad_id: { 
		type: Schema.Types.ObjectId, ref: 'Advertisement' 
	},
	createdby: {
		type: 'String'
	},
	createdfor: {
		type: 'String'
	},
	escrowID: {
		type: 'Number',
	},
	order_type: {
		type: 'String'
	},
	order_coin_amount: {
		type: 'Number'
	},
	order_fiat_amount: {
		type: 'Number'
	},
	from: {
		type: 'String'
	},
	order_rate: {
		type: 'Number'
	},
	order_status: {
		type: 'String'
	},
	order_payment_method: {
		type: 'String'
	},
	agree_terms: {
		type: 'Boolean'
	},
	market: {
		type: 'String'
	},
	to: {
		type: 'String'
	},
	escrow_rat_deadline: {
		type: 'Date'
	},
	escrow_exp_deadline: {
		type: 'Date'
	},
	payment_details: {
		account_holder_name: {
			type: 'String'
		},
		account_number: {
			type: 'Number'
		},
		bank_name: {
			type: 'String'
		},
		bank_code: {
			type: 'String'
		},
		bank_address:{
			type:'String'
		},
		swift_bic_code: {
			type: 'String'
		},
		paypal_email: {
			type: 'String'
		},
		place_of_exchange: {
			type: 'String'
		},
		upi_id: {
			type: 'String'
		},
		crypto_address: {
			type: 'String'
		},
	},
},
{
  timestamps: true
});
var Order = mongoose.model('Order', Orderschema);

Promise.promisifyAll(Order)
Promise.promisifyAll(Order.prototype)

exports.Order = Order