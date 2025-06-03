const TrainerProfile = require('../models/TrainerProfile');


exports.createTrainerProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    const profile = await TrainerProfile.create({
      user: userId,
      ...req.body
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



exports.getAllTrainerProfiles = async (req, res) => {
  try {
    const trainers = await TrainerProfile.find().populate('user', 'name ');
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trainer profiles' });
  }
};


exports.updateTrainerProfile = async (req, res) => {
  try {
    const updatedProfile = await TrainerProfile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('user', 'name email');

    if (!updatedProfile) {
      return res.status(404).json({ error: 'Trainer profile not found' });
    }

    res.json(updatedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
