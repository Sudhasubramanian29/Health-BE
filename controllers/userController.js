const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json(user);
};

exports.updatePreferences = async (req, res) => {
  const { fitnessGoals, nutritionGoals } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.preferences = { fitnessGoals, nutritionGoals };
    await user.save();
    res.json({ message: 'Preferences updated', preferences: user.preferences });
  } catch {
    res.status(500).json({ message: 'Update failed' });
  }
};
