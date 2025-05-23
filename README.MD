# Akhilesh Hissal - Personal Dashboard Web App

A responsive and secure personal portfolio dashboard built with static HTML/CSS/JS frontend served via a Node.js and Express backend.

---

## Features

- Multi-page static site: Home, Profile, Education, Skills, Experience
- Navigation with responsive hamburger menu
- Security best practices using Helmet middleware
- Simple Express routing serving static files
- Custom 404 page for unknown routes

---

## Technologies

- Node.js
- Express.js
- Helmet
- HTML, CSS, JavaScript
- Font Awesome icons

---

## Project Structure

/project-root
│
├── public/
│ ├── home.html
│ ├── profile.html
│ ├── education.html
│ ├── skills.html
│ ├── experience.html
│ ├── 404.html
│ ├── css/
│ ├── js/
│ └── images/
│
├── server.js
├── package.json
└── README.md

yaml
Copy
Edit

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/akhilesh-dashboard.git
cd akhilesh-dashboard
Install dependencies:

bash
Copy
Edit
npm install express helmet
Usage
Run the server:

bash
Copy
Edit
node server.js
Open your browser and navigate to:

arduino
Copy
Edit
http://localhost:3000
Available routes:

/ → Home page

/profile

/education

/skills

/experience

Invalid URLs will show a custom 404 page.

Server Code Example (server.js)
js
Copy
Edit
const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.disable('x-powered-by');

// Serve static files from 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Dynamic pages
app.get('/:page', (req, res) => {
  const allowedPages = ['profile', 'education', 'skills', 'experience'];
  const page = req.params.page;

  if (allowedPages.includes(page)) {
    res.sendFile(path.join(__dirname, `public/${page}.html`));
  } else {
    res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
License
This project is open source and free to use.

pgsql
Copy
Edit

Just copy and paste this into a file named `README.md` in your project folder.

If you want me to generate any other file or help with deployment, just ask!