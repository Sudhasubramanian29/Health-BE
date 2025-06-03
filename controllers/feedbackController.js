const Feedback = require('../models/Feedback');


const getMyFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedback' });
  }
};


const postFeedback = async (req, res) => {
  try {
    const { text } = req.body;

    
    if (!text || !text.trim()) {
      return res.status(400).json({ message: 'Feedback is required' });
    }

    const exists = await Feedback.findOne({
      user: req.user.id,
      text: { $regex: `^${text.trim()}$`, $options: 'i' },
    });

    if (exists) {
      return res.status(400).json({ message: 'Duplicate feedback not allowed' });
    }

    const feedback = new Feedback({
      user: req.user.id,
      text: text.trim(),
    });

    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ message: 'Error submitting feedback' });
  }
};

module.exports = { getMyFeedback, postFeedback };
