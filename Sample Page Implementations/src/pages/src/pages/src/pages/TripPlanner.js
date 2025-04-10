import React from "react";
import Button from "../components/Button";

const TripPlanner = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Plan Your Trip</h1>
      <div className="mb-4">
        <label className="block mb-2">Destination</label>
        <input
          type="text"
          placeholder="Enter destination"
          className="w-full p-3 rounded border focus:outline-none focus:ring focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Dates</label>
        <input
          type="text"
          placeholder="Select dates"
          className="w-full p-3 rounded border focus:outline-none focus:ring focus:border-primary"
        />
      </div>
      <Button variant="cta" className="w-full">
        Get AI Suggestions
      </Button>
      <div className="mt-6">
        {/* Placeholder for dynamic AI suggestions */}
        <p className="text-gray-600 dark:text-gray-300">
          AI-powered suggestions will appear here...
        </p>
      </div>
    </div>
  );
};

export default TripPlanner;
