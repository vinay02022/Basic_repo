# Simple Dual Source API

A simple Node.js API that provides data from two different sources (employees and products) and returns a combined response.

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```
   Or for development with auto-reload:
   ```
   npm run dev
   ```

4. Test the API:
   ```
   npm test
   ```

## Deployment on Render

This application is ready to deploy on Render:

1. Create a new Web Service in Render
2. Connect your GitHub repository
3. Use the following settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: 14 or higher

## API Endpoint

The API has one main endpoint that returns data from both sources in a combined format:

- **GET /api/data**: Returns all employees and products in a combined response

## Example Response

```json
{
  "employees": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "position": "Senior Developer",
      "department": "Engineering",
      "salary": 85000
    },
    {
      "id": "2",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "position": "Product Manager",
      "department": "Product",
      "salary": 90000
    }
  ],
  "products": [
    {
      "id": "101",
      "name": "Laptop Pro",
      "description": "High-performance laptop for professionals",
      "price": 1299.99,
      "category": "Electronics",
      "createdBy": "john.doe@example.com"
    },
    {
      "id": "102",
      "name": "Smartphone X",
      "description": "Latest smartphone with advanced features",
      "price": 899.99,
      "category": "Electronics",
      "createdBy": "jane.smith@example.com"
    }
  ]
} 