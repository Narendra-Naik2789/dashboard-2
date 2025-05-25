# Akhilesh Hissal - Personal Dashboard Web App

A responsive and secure personal portfolio dashboard built with a static HTML/CSS/JS frontend served via a Node.js and Express backend.

# 🌐 Live Demo

You can view the live deployed version of this project here:

[🌍 Live View on Render](https://dashboard-y5eu.onrender.com)

---

## ✨ Features

- **Multi-page static site**: Home, Profile, Education, Skills, Experience
- **Responsive Design**: Mobile-friendly layout with hamburger menu
- **Enhanced Security**: Helmet middleware for best practices
- **Custom Error Handling**: 404 page for invalid routes
- **Simple Routing**: Express.js backend serving static files

## 🛠 Technologies

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Security**: Helmet
- **Icons**: Font Awesome
- **Web Server**: Express static file serving

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Akhilsh-Hissal2789/Dashboard.git
cd akhilesh-dashboard

Install dependencies:

## ✨ Features

- **Multi-page static site**: Home, Profile, Education, Skills, Experience
- **Responsive Design**: Mobile-friendly layout with hamburger menu
- **Enhanced Security**: Helmet middleware for best practices
- **Custom Error Handling**: 404 page for invalid routes
- **Simple Routing**: Express.js backend serving static files

## 🛠 Technologies

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Security**: Helmet
- **Icons**: Font Awesome
- **Web Server**: Express static file serving

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Akhilesh-Hissal2789/Dashboard.git
cd akhilesh-dashboard

Install dependencies:

npm install express helmet

Usage
Start the development server:

node server.js

Visit http://localhost:3000 in your browser.

🌐 Available Routes
/ - Home page

/profile - Professional profile

/education - Academic background

/skills - Technical skills showcase

/experience - Work experience timeline

Any invalid URL - Custom 404 page

📁 Project Structure

project-root/
│
├── public/            # Static assets
│   ├── home.html      # Landing page
│   ├── profile.html   # Professional profile
│   ├── education.html # Education details
│   ├── skills.html    # Skills showcase
│   ├── experience.html# Work experience
│   ├── 404.html       # Custom error page
│   ├── css/           # Stylesheets
│   ├── js/            # Client-side scripts
│   └── images/        # Media assets
│
├── server.js          # Express server configuration
├── package.json       # Dependency management
└── README.md          # Project documentation

🔒 Server Configuration (server.js)

const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.disable('x-powered-by');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route handling
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.get('/:page', (req, res) => {
  const allowedPages = ['profile', 'education', 'skills', 'experience'];
  const page = req.params.page;

  allowedPages.includes(page) 
    ? res.sendFile(path.join(__dirname, `public/${page}.html`))
    : res.status(404).sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

📜 License
This project is released under the MIT License - free for personal and commercial use.

Powered by Node.js
Built with Express