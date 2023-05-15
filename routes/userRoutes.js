const router = require('express').Router();
const {
	getUsers,
	addUser,
	loginUser,
	updateUser,
	deleteUser,
	getUserbyId
} = require('../controllers/userController');
const {
	getAllUserExams,
	addNewExamForUser,
	getPaymentStatus
} = require('../controllers/myExamsController');
const protected = require('../middlewares/authMiddlewares');

// router.route('/').get(protected, getUsers);
router.route('/').get(getUsers);
router.route('/:id').get(protected, getUserbyId);
router.route('/update/:id').put(protected, updateUser);
router.route('/delete/:id').delete(protected, deleteUser);
router.route('/register').post(addUser);
router.route('/login').post(loginUser);
router.route('/myexams').get(protected, getAllUserExams);
router.route('/add-new-exam').post(protected, addNewExamForUser);
router.route('/get-payment-status').post(protected, getPaymentStatus);

module.exports = router;
