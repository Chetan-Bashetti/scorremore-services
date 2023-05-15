const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const examsSchema = new Schema(
	{
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
		}
	},
	{
		timestamps: true
	}
);

const Exams = mongoose.model('Exams', examsSchema);

module.exports = Exams;
