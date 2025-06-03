const express = require('express');
const router = express.Router();
const { createDummyPayment } = require('../controllers/paymentController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createDummyPayment);

module.exports = router