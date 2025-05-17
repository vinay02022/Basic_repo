const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection strings from environment variables
const MONGODB_EMPLOYEES_URI = process.env.MONGODB_EMPLOYEES_URI || 'mongodb://localhost:27017/employees_db';
const MONGODB_PRODUCTS_URI = process.env.MONGODB_PRODUCTS_URI || 'mongodb://localhost:27017/products_db';

// Connect to MongoDB databases
mongoose.connect(MONGODB_EMPLOYEES_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to employees_db');
}).catch(err => {
  console.error('Error connecting to employees_db:', err);
});

// Create a second connection for products_db
const productsConnection = mongoose.createConnection(MONGODB_PRODUCTS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

productsConnection.on('connected', () => {
  console.log('Connected to products_db');
});

productsConnection.on('error', (err) => {
  console.error('Error connecting to products_db:', err);
});

// Import routes
const combinedRoutes = require('./routes/combined.routes');

// Use routes
app.use('/api', combinedRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Test Assignment API' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 