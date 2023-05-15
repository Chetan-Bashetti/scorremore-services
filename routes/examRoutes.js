const router = require('express').Router();
const {
	getExams,
	addExam,
	updateExam,
	deleteExam,
	getExamById
} = require('../controllers/examsController');
const protected = require('../middlewares/authMiddlewares');

router.route('/').get(getExams);
router.route('/:id').get(protected, getExamById);
router.route('/update/:id').put(protected, updateExam);
router.route('/delete/:id').delete(protected, deleteExam);
router.route('/add').post(addExam);

module.exports = router;
