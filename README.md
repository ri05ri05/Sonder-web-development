Sonder - Tourism Planner Application

sonder/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── logo.svg              // Your custom logo assets
│   ├── components/
│   │   ├── Button.js             // Primary button component
│   │   ├── Card.js               // Card component (used for trips, suggestions, etc.)
│   │   ├── Modal.js              // Modal pop-ups (share trip, add place, budget summary)
│   │   ├── Navbar.js             // Navigation bar for app pages
│   │   └── ThemeToggle.js        // Light/Dark mode toggler
│   ├── pages/
│   │   ├── Login.js              // Login / Sign-up page
│   │   ├── Dashboard.js          // Main dashboard with trips overview and quick actions
│   │   ├── TripPlanner.js        // Trip creation & editing flow with AI suggestions
│   │   ├── MapView.js            // Map integration for adding/viewing destinations
│   │   └── Budget.js             // Budget planner with charts and expense breakdown
│   ├── App.js                    // Main application routing
│   ├── index.js                  // Entry point, ReactDOM.render here
│   └── tailwind.css              // Tailwind CSS imports & custom styles
├── package.json
└── README.md

