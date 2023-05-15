const instance = require('../razorpayInstance/razorpayInstance');

const checkOut = async (req, res) => {
	console.log(req.body);
	let { amount } = req.body;
	if (amount) {
		var options = {
			amount: Number(amount * 100), // amount in the smallest currency unit
			currency: 'INR'
		};
		const order = await instance.orders.create(options);
		res.status(200).send({ success: true, orderDetails: order });
	} else {
		res.status(400).send({ status: true, details: 'Amount is missing' });
	}
};

module.exports = checkOut;
