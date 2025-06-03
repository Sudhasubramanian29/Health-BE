const express = require('express');
const { createClass, getAllClasses, getClassById, deleteClass } = require('../controllers/classController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
  .get(getAllClasses)
  .post(protect, createClass);

router.route('/:id')
  .get(getClassById)
  .delete(protect, deleteClass);

module.exports = router;
