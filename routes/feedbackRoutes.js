const express = require('express');
const { getMyFeedback, postFeedback } = require('../controllers/feedbackController');
const auth= require('../middleware/authMiddleware');

const router = express.Router();

router.get('/my', auth.protect, getMyFeedback);
router.post('/', auth.protect, postFeedback);

module.exports = router;
