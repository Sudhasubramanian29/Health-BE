const express = require('express');
const router = express.Router();
const { getRecommendations } = require('../controllers/recommendationController');
const auth = require('../middleware/authMiddleware');



router.get('/recommendations', auth.protect, getRecommendations);



module.exports = router;