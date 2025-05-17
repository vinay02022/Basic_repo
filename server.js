const express = require('express');
const cors = require('cors');

const app = express();
// Use environment variable PORT or default to 5000 for local development
// Render will provide its own PORT environment variable
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Hardcoded sample data
const employeesData = [
  {
    id: "1",
    name: 'John Doe',
    email: 'john.doe@example.com',
    position: 'Senior Developer',
    department: 'Engineering',
    salary: 85000
  },
  {
    id: "2",
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    position: 'Product Manager',
    department: 'Product',
    salary: 90000
  }
];

const productsData = [
  {
    id: "101",
    name: 'Laptop Pro',
    description: 'High-performance laptop for professionals',
    price: 1299.99,
    category: 'Electronics',
    createdBy: 'john.doe@example.com'
  },
  {
    id: "102",
    name: 'Smartphone X',
    description: 'Latest smartphone with advanced features',
    price: 899.99,
    category: 'Electronics',
    createdBy: 'jane.smith@example.com'
  }
];

// Routes
app.get('/', (req, res) => {
  res.send('Dual Source API is running successfully!');
});

// Combined API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    employees: employeesData,
    products: productsData
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 