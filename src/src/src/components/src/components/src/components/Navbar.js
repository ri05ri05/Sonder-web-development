import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Sonder Logo" className="w-10 h-10 mr-2" />
        <span className="font-bold text-xl">Sonder</span>
      </div>
      <div className="space-x-4">
        <Link to="/">Dashboard</Link>
        <Link to="/trip">Plan Trip</Link>
        <Link to="/map">Map</Link>
        <Link to="/budget">Budget</Link>
      </div>
    </nav>
  );
};

export default Navbar;
