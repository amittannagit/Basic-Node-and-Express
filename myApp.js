let express = require('express');
let bodyParser = require('body-parser'); // 11. Require body-parser
let app = express();
require('dotenv').config()  // 6. Load environment variables at the very top


// 1. Log "Hello World" to the console
console.log("Hello World");

// 2. Define the logger middleware
app.use(function(req, res, next) {
  // 7. Build a simple logger middleware
  const logMessage = `${req.method} ${req.path} - ${req.ip}`;
  console.log(logMessage);
  next(); // Pass control to the next middleware or route handler
});

// 11. Mount body-parser middleware to handle URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

// 3. Add the route
app.get('/', function(req, res) {
  // Serve the index.html file for GET requests to the / path
  res.sendFile(__dirname + '/views/index.html');
});

// 4. Mount the express.static() middleware
app.use('/public', express.static(__dirname + '/public'));

// 5. Add a new route to serve JSON
app.get('/json', function(req, res) {
  // Modify the /json endpoint to use the environment variable
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({"message": message});
});

// 8. Chain a middleware function to add the current time to the request object
app.get('/now', function(req, res, next) {
  req.time = new Date().toString(); // Add the current time to req.time
  next(); // Pass control to the next handler
}, function(req, res) {
  res.json({time: req.time}); // Respond with a JSON object
});

// 9. Build an echo server
app.get('/:word/echo', function(req, res) {
  const word = req.params.word; // Access the word from the route parameter
  res.json({echo: word}); // Respond with a JSON object containing the echoed word
});

// 10. Build an API endpoint at GET /name
app.get('/name', function(req, res) {
  const firstName = req.query.first; // Access the 'first' query string parameter
  const lastName = req.query.last;   // Access the 'last' query string parameter
  res.json({ name: `${firstName} ${lastName}` }); // Respond with a JSON object
});

// 12. Handle POST requests to /name
app.route('/name')
  .get(function(req, res) {
    const firstName = req.query.first; // Access the 'first' query string parameter
    const lastName = req.query.last;   // Access the 'last' query string parameter
    res.json({ name: `${firstName} ${lastName}` }); // Respond with a JSON object
  })
  .post(function(req, res) {
    const firstName = req.body.first; // Access the 'first' field in the POST request body
    const lastName = req.body.last;   // Access the 'last' field in the POST request body
    res.json({ name: `${firstName} ${lastName}` }); // Respond with a JSON object
  });

module.exports = app;
