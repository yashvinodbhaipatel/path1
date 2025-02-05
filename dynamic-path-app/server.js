const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (HTML, JS) from 'public' folder
app.use(express.static('public'));

// Endpoint to get dynamic path
app.get('/get-dynamic-path', (req, res) => {
  let username = os.userInfo().username;  // Get the OS username
  let dynamicPath = path.join('C:', 'Users', username, 'AppData', 'Local', 'Microsoft', 'Edge', 'User Data', 'Default', 'Network', 'Cookies');
  res.json({ dynamicPath: dynamicPath });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
