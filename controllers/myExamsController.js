const MyExams = require('../models/myExams');
const asyncHandler = require('express-async-handler');

const getAllUserExams = asyncHandler(async (req, res) => {
	let myExams = await MyExams.find();

	if (myExams) {
		res.status(200).send({
			count: myExams.length,
			exams: myExams
		});
	} else {
		res.status(404).send('Exams not found');
	}
});

const getPaymentStatus = asyncHandler(async (req, res) => {
	let { userId, examId } = req.body;
	let isPaid = await MyExams.findOne({ id: examId, userId });
	if (isPaid) {
		res.status(200).send({ paid: true });
	} else {
		res.status(200).send({ paid: false });
	}
});

const addNewExamForUser = asyncHandler(async (req, res) => {
	const {
		_id,
		name,
		type,
		description,
		questions,
		price,
		expireDateTime,
		userId
	} = req.body;

	const examExixts = await MyExams.findOne({ id: _id });
	if (examExixts) {
		res.status(400);
		throw new Error('You have already attempted this exam');
	}

	const exam = MyExams.create({
		id: _id,
		name,
		type,
		description,
		questions,
		price,
		expireDateTime,
		userId
	});

	if (exam) {
		res.status(200).json({
			message: 'Exams created successfully'
		});
	} else {
		res.status(400);
		throw new Error('Bad request');
	}
});

module.exports = {
	getAllUserExams,
	addNewExamForUser,
	getPaymentStatus
};
