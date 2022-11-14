import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>This is am error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
