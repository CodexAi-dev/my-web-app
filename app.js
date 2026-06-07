const express = require('express');
const path = require('path');

const app = express();

// Serve the web page and anything in the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// A small API endpoint we can write a test against
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Only start a real server when run directly (not during tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;