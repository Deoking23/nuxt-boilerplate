const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.get('/', function (req, res) {
  res.send('Aart Nuxt Boilerplate');
});
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
