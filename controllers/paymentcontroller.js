
const Payment = require('../models/Payment');

exports.processPayment = async (req, res) => {
  try {
    const { amount } = req.body;
    res.status(200).json({ success: true, message: `Dummy payment of ₹${amount} successful.` });
  } catch (error) {
    res.status(500).json({ error: 'Payment failed' });
  }
};
