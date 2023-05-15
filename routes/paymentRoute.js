const express = require('express');
const checkOut = require('../controllers/chekoutController');
const makePayment = require('../controllers/paymentController');
const router = express.Router();

router.route('/checkout').post(checkOut);
router.route('/makePayment').post(makePayment);

module.exports = router;
