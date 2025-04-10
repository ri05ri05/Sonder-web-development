import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TripPlanner from "./pages/TripPlanner";
import MapView from "./pages/MapView";
import Budget from "./pages/Budget";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  // Simple theme toggler using state
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={
        darkMode ? "bg-dark text-text-dark" : "bg-light text-text-light"
      }
    >
      <Router>
        {/* Navbar rendered on all pages except login */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <div className="p-4">
                  <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/trip" element={<TripPlanner />} />
                    <Route path="/map" element={<MapView />} />
                    <Route path="/budget" element={<Budget />} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
