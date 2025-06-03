const express = require('express');
const router = express.Router();
const { setGoal, getGoal } = require('../controllers/goalController'); 
const auth = require('../middleware/authMiddleware');

router.post('/', auth.protect, setGoal);
router.get('/', auth.protect, getGoal);

module.exports = router;
