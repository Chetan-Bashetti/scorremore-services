const mongoose = require('mongoose');

const connectDB = async () => {
	const connect = await mongoose.connect(process.env.MONGO_URL);
	console.log(`successfully connected to ${connect.connection.host}`);
};

module.exports = connectDB;
