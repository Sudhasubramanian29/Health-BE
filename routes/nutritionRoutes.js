const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addNutrition, getNutrition, deleteNutritionLog } = require('../controllers/nutritionController');

router.post('/', protect, addNutrition);
router.get('/', protect, getNutrition);
router.delete('/:id', protect, deleteNutritionLog);
module.exports = router;
