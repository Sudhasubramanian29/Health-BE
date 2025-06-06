const express = require('express');
const router = express.Router();
const {
  createTrainerProfile,
  getAllTrainerProfiles,
  updateTrainerProfile,
} = require('../controllers/trainerController');
const auth = require('../middleware/authMiddleware');

// File upload
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/', auth.protect, upload.single('photo'), createTrainerProfile);
router.get('/trainers', auth.protect, getAllTrainerProfiles);
router.put('/:id', auth.protect, upload.single('photo'), updateTrainerProfile);

module.exports = router;
