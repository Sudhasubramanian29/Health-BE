const express = require('express');
const router = express.Router();
const { createTrainerProfile,  getAllTrainerProfiles, updateTrainerProfile } = require('../controllers/trainerController');

const auth = require('../middleware/authMiddleware');

router.post('/', auth.protect, createTrainerProfile);
router.get('/trainers', auth.protect,getAllTrainerProfiles);
router.put('/:id',auth. protect, updateTrainerProfile); 


module.exports = router;