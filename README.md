This project showcases a Node.js API that connects to two MongoDB databases—`employees_db` and `products_db`—to manage and retrieve employee and product data. It supports basic CRUD operations via RESTful endpoints. A combined API endpoint returns both datasets along with a summary. The server runs locally on port 3000 and is tested using tools like Postman or curl.
As very less time alloted did not created Frontend for this 
backend Deployed link : https://basic-repo-xbzf.onrender.com



##API Endpoints

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
## Database Structure---------------------------------------------------------------
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
