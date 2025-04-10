import React from "react";
import Button from "./Button";

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="mb-4 flex justify-end">
      <Button variant="secondary" onClick={toggleTheme}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
    </div>
  );
};

export default ThemeToggle;
