const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Apply security middleware
app.use(helmet());
app.disable('x-powered-by');

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Main route: home.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Dynamic routes for profile, education, etc.
app.get('/:page', (req, res) => {
  const allowedPages = ['profile', 'education', 'skills', 'experience'];
  const page = req.params.page;
  if (allowedPages.includes(page)) {
    res.sendFile(path.join(__dirname, `public/${page}.html`));
  } else {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
