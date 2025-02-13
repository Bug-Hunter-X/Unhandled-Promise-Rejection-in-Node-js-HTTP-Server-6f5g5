const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(error => {
    // Error handling is missing here.  The error is swallowed. 
    console.error('Error:', error); // This log is not visible to the client
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate a scenario where the Promise is rejected.
  // For example, database error, network failure, etc.
  const random = Math.random();
  if(random < 0.5) {
    throw new Error('Simulated asynchronous operation failed.');
  }
  return 'Success';
}