const express = require('express');
const router = express.Router();
const { addWorkout, getWorkouts ,deleteWorkout} = require('../controllers/workoutController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, addWorkout);
router.get('/', protect, getWorkouts);
router.delete('/:id',protect,deleteWorkout);

module.exports = router;
