const express = require('express');
const router = express.Router();
const { dummyPayment } = require('../controllers/paymentController');

router.post('/', dummyPayment);

module.exports = router;
