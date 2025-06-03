const Goal = require('../models/Goal');

exports.setGoal = async (req, res) => {
  const { steps, workouts, calories } = req.body;
  try {
    let goal = await Goal.findOne({ user: req.user._id });
    if (goal) {
      goal.steps = steps;
      goal.workouts = workouts;
      goal.calories = calories;
      await goal.save();
    } else {
      goal = await Goal.create({ user: req.user._id, steps, workouts, calories });
    }
    res.json(goal);
  } catch {
    res.status(500).json({ message: 'Error saving goal' });
  }
};

exports.getGoal = async (req, res) => {
  try {
    const goal = await Goal.findOne({ user: req.user._id });
    res.json(goal);
  } catch {
    res.status(500).json({ message: 'Error fetching goal' });
  }
};
