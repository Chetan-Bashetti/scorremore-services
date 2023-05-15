const crypto = require('crypto');
const Payment = require('../models/paymentModel');

const makePayment = async (req, res) => {
	const {
		data: {
			razorpay_payment_id,
			razorpay_order_id,
			razorpay_signature,
			exam_id,
			slug
		}
	} = req.body;
	let body = razorpay_order_id + '|' + razorpay_payment_id;
	const expectedSignature = crypto
		.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
		.update(body.toString())
		.digest('hex');

	const isAuthenticated = expectedSignature === razorpay_signature;

	if (isAuthenticated) {
		await Payment.create({
			razorpay_payment_id,
			razorpay_order_id,
			razorpay_signature,
			exam_id,
			slug
		});
		res.status(200).send({ success: true, message: 'Payment successful' });
	} else {
		res.status(400).send({ success: false, message: 'Invalid signature' });
	}
};

module.exports = makePayment;
