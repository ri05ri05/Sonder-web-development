import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy data for upcoming trips (replace with API data later)
  const trips = [
    { id: 1, title: "Summer in Italy", date: "2025-07-15" },
    { id: 2, title: "Paris Getaway", date: "2025-09-10" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Trips</h1>
        <Link to="/trip">
          <Button variant="cta">Plan New Trip</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trips.map((trip) => (
          <Card
            key={trip.id}
            title={trip.title}
            footer={<div>Date: {trip.date}</div>}
          >
            <p>Explore your itinerary with AI suggestions.</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
