const TrainerProfile = require('../models/TrainerProfile');

exports.createTrainerProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const photo = req.file ? req.file.filename : null;

    const profile = await TrainerProfile.create({
      user: userId,
      photo,
      ...req.body,
    });

    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTrainerProfiles = async (req, res) => {
  try {
    const trainers = await TrainerProfile.find().populate('user', 'name');
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trainer profiles' });
  }
};

exports.updateTrainerProfile = async (req, res) => {
  try {
    const photo = req.file ? req.file.filename : undefined;
    const updateData = { ...req.body };
    if (photo) updateData.photo = photo;

    const updatedProfile = await TrainerProfile.findByIdAndUpdate(
      req.params.id,
      updateData,
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
