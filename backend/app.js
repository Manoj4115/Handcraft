// server.js
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

// Import routes
const products = require('./routes/product');
const orders = require('./routes/order');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
const PORT = process.env.PORT || 8000; // Use PORT from config.env

// Connect to the database
connectDatabase();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/', products);
app.use('/api/v1/', orders);

// Login endpoint (optional if you want to keep it in this file)
app.post('/api/v1/login', (req, res) => {
  const { username, password } = req.body;
  // Basic authentication
  if (username === 'ManojKumar' && password === 'Avanthi') {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
