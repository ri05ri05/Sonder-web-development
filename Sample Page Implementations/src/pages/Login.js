import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome to Sonder
        </h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded border focus:outline-none focus:ring focus:border-primary"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded border focus:outline-none focus:ring focus:border-primary"
          />
          <Button variant="primary" type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
