const Journal = require('../models/Journal');
const Meditation = require('../models/Meditation');
const Stress = require('../models/Stress');

// ---------------- JOURNAL ----------------
exports.createJournal = async (req, res) => {
  try {
    const journal = await Journal.create({ ...req.body, user: req.user._id });
    res.status(201).json(journal);
  } catch {
    res.status(500).json({ message: 'Failed to create journal entry' });
  }
};

exports.getJournals = async (req, res) => {
  try {
    const entries = await Journal.find({ user: req.user._id }).sort({ date: -1 });
    res.json(entries);
  } catch {
    res.status(500).json({ message: 'Failed to fetch journals' });
  }
};

exports.deleteJournal = async (req, res) => {
  try {
    const journal = await Journal.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!journal) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }
    res.json({ message: 'Journal entry deleted' });
  } catch {
    res.status(500).json({ message: 'Failed to delete journal entry' });
  }
};

// ---------------- MEDITATION ----------------
exports.logMeditation = async (req, res) => {
  try {
    const session = await Meditation.create({ ...req.body, user: req.user._id });
    res.status(201).json(session);
  } catch {
    res.status(500).json({ message: 'Failed to log meditation' });
  }
};

exports.getMeditations = async (req, res) => {
  try {
    const sessions = await Meditation.find({ user: req.user._id }).sort({ date: -1 });
    res.json(sessions);
  } catch {
    res.status(500).json({ message: 'Failed to fetch meditations' });
  }
};

exports.deleteMeditation = async (req, res) => {
  try {
    const session = await Meditation.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!session) {
      return res.status(404).json({ message: 'Meditation session not found' });
    }
    res.json({ message: 'Meditation session deleted' });
  } catch {
    res.status(500).json({ message: 'Failed to delete meditation session' });
  }
};

// ---------------- STRESS ----------------
exports.logStress = async (req, res) => {
  try {
    const log = await Stress.create({ ...req.body, user: req.user._id });
    res.status(201).json(log);
  } catch {
    res.status(500).json({ message: 'Failed to log stress' });
  }
};

exports.getStressLogs = async (req, res) => {
  try {
    const logs = await Stress.find({ user: req.user._id }).sort({ date: -1 });
    res.json(logs);
  } catch {
    res.status(500).json({ message: 'Failed to fetch stress logs' });
  }
};

exports.deleteStressLog = async (req, res) => {
  try {
    const log = await Stress.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!log) {
      return res.status(404).json({ message: 'Stress log not found' });
    }
    res.json({ message: 'Stress log deleted' });
  } catch {
    res.status(500).json({ message: 'Failed to delete stress log' });
  }
};
