const http = require('http');

// Configuration
const host = 'localhost';
const port = process.env.PORT || 5000;

// Test function
async function testAPI() {
  try {
    console.log('Testing API...');
    
    // Make a request to the combined data endpoint
    const options = {
      hostname: host,
      port: port,
      path: '/api/data',
      method: 'GET'
    };

    const request = http.request(options, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          console.log('API Response:');
          console.log('Status Code:', response.statusCode);
          console.log('Employees Count:', result.employees.length);
          console.log('Products Count:', result.products.length);
          
          // Print a sample employee and product
          if (result.employees.length > 0) {
            console.log('\nSample Employee:');
            console.log(result.employees[0]);
          }
          
          if (result.products.length > 0) {
            console.log('\nSample Product:');
            console.log(result.products[0]);
          }
          
          console.log('\nAPI test completed successfully!');
        } catch (e) {
          console.error('Error parsing response:', e);
          console.log('Raw response:', data);
        }
      });
    });
    
    request.on('error', (error) => {
      console.error('Error testing API:', error.message);
      if (error.code === 'ECONNREFUSED') {
        console.log('\nMake sure the server is running. Start it with: npm start');
      }
    });
    
    request.end();
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the test
testAPI(); 