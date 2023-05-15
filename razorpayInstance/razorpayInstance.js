const Razorpay = require('razorpay');
const dotEnv = require('dotenv');

dotEnv.config({ path: './config/config.env' });

const instance = new Razorpay({
	key_id: 'rzp_live_zYjhbKLLu3VXeD',
	key_secret: 'cuFlzivIe5bVIrSoqf4UCki0'
});

module.exports = instance;
