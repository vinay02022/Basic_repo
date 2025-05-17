# Test Assignment - Dual Database API

This project demonstrates an API that fetches data from two MongoDB databases (`employees_db` and `products_db`) and returns combined responses.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Make sure MongoDB server is running locally)
- npm (Node Package Manager)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running on your local machine (default port: 27017)
4. Start the server:
   ```bash
   npm run dev
   ```

The server will start on port 3000 by default.

## API Endpoints

### Employees

- **GET /api/employees** - Get all employees
- **POST /api/employees** - Add a new employee
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "position": "Developer",
    "department": "IT"
  }
  ```

### Products

- **GET /api/products** - Get all products
- **POST /api/products** - Add a new product
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 99.99,
    "category": "Electronics",
    "inStock": true
  }
  ```

### Combined Data

- **GET /api/combined** - Get both employees and products data with summary
  ```json
  {
    "employees": [...],
    "products": [...],
    "summary": {
      "totalEmployees": 10,
      "totalProducts": 20
    }
  }
  ```

## Testing

You can use tools like Postman or curl to test the API endpoints. The server will respond with appropriate HTTP status codes and JSON data.

## Database Structure

### employees_db
- Collection: employees
  - name (String)
  - email (String, unique)
  - position (String)
  - department (String)
  - joinDate (Date)

### products_db
- Collection: products
  - name (String)
  - description (String)
  - price (Number)
  - category (String)
  - inStock (Boolean)
  - createdAt (Date) "# Basic_repo" 
