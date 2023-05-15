const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
	{
		razorpay_payment_id: {
			type: String,
			require: true
		},
		razorpay_order_id: {
			type: String,
			require: true
		},
		razorpay_signature: {
			type: String,
			require: true
		},
		exam_id: {
			type: String
		},
		slug: {
			type: String
		}
	},
	{
		timestamps: true
	}
);

const Payment = mongoose.model('payment', paymentSchema);

module.exports = Payment;
