const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes');
const goalRoutes = require('./routes/goalRoutes');
const mentalRoutes = require('./routes/mentalRoutes');
const classRoutes = require('./routes/classRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const feedbackRoutes= require('./routes/feedbackRoutes');
const recommendRoutes = require('./routes/recommendationRoutes');
const paymentRoutes = require('./routes/paymentRoutes')
// Load .env
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/workouts',workoutRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/api/goals',goalRoutes);
app.use('/api/mental', mentalRoutes);
app.use('/api/classes',classRoutes);
app.use('/api/bookings',bookingRoutes);
app.use('/api/trainers',trainerRoutes);
app.use('/api/feedback',feedbackRoutes);
app.use('/api/recommend',recommendRoutes);
app.use('/api/payments',paymentRoutes);
// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
