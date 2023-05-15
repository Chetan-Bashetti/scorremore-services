const Exams = require('../models/examModel');

const asyncHandler = require('express-async-handler');

const getExams = asyncHandler(async (req, res) => {
	let exams = await Exams.find();
	if (exams) {
		res.status(200).send({
			totalCount: exams?.length,
			data: exams
		});
	} else {
		res.status(404).res.send('Exams not found');
	}
});

const addExam = asyncHandler(async (req, res) => {
	const { name, type, description, questions, price, expireDateTime } =
		req.body;

	if (name === '' || type === '' || questions === []) {
		res.status(400);
		throw new Error('Please fill all fields');
	}
	if (name.length < 3) {
		res.status(400);
		throw new Error('Exams name should of atleast 3 charecters');
	}
	const exam = Exams.create({
		name,
		type,
		description,
		questions,
		price,
		expireDateTime
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

const updateExam = asyncHandler(async (req, res) => {
	let exam = await Exams.findById(req.params.id);

	if (req.body.name < 3) {
		res.status(400);
		throw new Error('Exams name should of atleast 3 charecters');
	}

	if (exam) {
		exam.name = req.body.name || exam.name;
		exam.type = req.body.type || exam.type;
		exam.description = req.body.description || exam.description;
		exam.questions = req.body.questions || exam.questions;
		exam.price = req.body.price || exam.price;
		exam.expireDateTime = req.body.expireDateTime || exam.expireDateTime;

		await exam.save();
		res.status(200).json({
			message: 'Updated exam scussessfully'
		});
	} else {
		res.status(400);
		throw new Error('Exams not found');
	}
});

const deleteExam = asyncHandler(async (req, res) => {
	let exam = await Exams.findById(req.params.id);
	if (exam) {
		await exam.deleteOne();
		res.status(200).json({ message: 'Exams deleted successfully' });
	} else {
		res.status(400);
		throw new Error('Exams not found');
	}
});

const getExamById = asyncHandler(async (req, res) => {
	let exam = await Exams.findById({ _id: req.params.id });
	if (exam) {
		res.status(200);
		res.json(exam);
	} else {
		res.status(400);
		throw new Error('Exams not found');
	}
});

module.exports = {
	getExams,
	addExam,
	updateExam,
	deleteExam,
	getExamById
};
