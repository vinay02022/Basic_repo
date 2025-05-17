const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.model');
const Product = require('../models/product.model');

// Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get combined data
router.get('/combined', async (req, res) => {
  try {
    const employees = await Employee.find();
    const products = await Product.find();
    
    res.json({
      employees,
      products,
      summary: {
        totalEmployees: employees.length,
        totalProducts: products.length
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new employee
router.post('/employees', async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    email: req.body.email,
    position: req.body.position,
    department: req.body.department
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Add a new product
router.post('/products', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    inStock: req.body.inStock
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 