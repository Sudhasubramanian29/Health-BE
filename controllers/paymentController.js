exports.dummyPayment = (req, res) => {
  const { cardNumber, name, expiry, cvv, amount } = req.body;

  if (!cardNumber || !name || !expiry || !cvv) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const paymentAmount = amount || 'some amount'; // default or fallback

  return res.status(200).json({ message: `Payment of ₹${paymentAmount} successful.` });
};
