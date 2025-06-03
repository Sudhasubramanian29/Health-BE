const express = require('express');
const router = express.Router();
const { register, login, getProfile, updatePreferences } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.put('/preferences', protect, updatePreferences);

module.exports = router;
