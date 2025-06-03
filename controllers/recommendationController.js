
const Recommendation = require('../models/Recommendation');
const Class = require('../models/Class');

exports.getRecommendations = async (req, res) => {
  const classes = await Class.find().limit(3);
  res.json({ user: req.user.id, recommendedClasses: classes });
};
