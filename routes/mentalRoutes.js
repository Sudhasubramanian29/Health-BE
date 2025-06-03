const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const mental = require('../controllers/mentalController');

// Journal
router.post('/journal', auth.protect, mental.createJournal);
router.get('/journal', auth.protect, mental.getJournals);
router.delete('/journal/:id', auth.protect, mental.deleteJournal);

// Meditation
router.post('/meditation', auth.protect, mental.logMeditation);
router.get('/meditation', auth.protect, mental.getMeditations);
router.delete('/meditation/:id', auth.protect, mental.deleteMeditation);

// Stress
router.post('/stress', auth.protect, mental.logStress);
router.get('/stress', auth.protect, mental.getStressLogs);
router.delete('/stress/:id', auth.protect, mental.deleteStressLog);

module.exports = router;
