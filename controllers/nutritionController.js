const Nutrition = require('../models/Nutrition');


exports.addNutrition = async (req, res) => {
  try {
    const { foodName, calories, date } = req.body;
    const newLog = new Nutrition({
      user: req.user._id,
      foodName,
      calories,
      date
    });

    await newLog.save();
    res.status(201).json(newLog);
  } catch (err) {
    console.error('Error creating nutrition log:', err);
    res.status(500).json({ message: 'Server error while logging food' });
  }
};


exports.getNutrition = async (req, res) => {
  try {
    const entries = await Nutrition.find({ user: req.user._id }).sort({ date: -1 });
    res.json(entries);
  } catch {
    res.status(500).json({ message: 'Failed to fetch logs' });
  }
};

exports.deleteNutritionLog = async (req, res) => {
  try {
    const log = await Nutrition.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!log) {
      return res.status(404).json({ message: 'Log not found' });
    }
    res.json({ message: 'Nutrition log deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete log' });
  }
};
