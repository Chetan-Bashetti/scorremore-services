const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myExams = new Schema(
	{
		id: {
			type: String,
			required: true
		},
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		description: {
			type: String
		},
		questions: {
			type: Array,
			required: true
		},
		price: {
			type: String,
			required: true
		},
		expireDateTime: {
			type: String,
			required: true
		},
		userId: {
			type: String,
			required: true
		}
	},
	{
		timestamps: true
	}
);

const MyExams = mongoose.model('myExmas', myExams);

module.exports = MyExams;
