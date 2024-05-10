// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Login.scss";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Retrieve data from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Check if entered credentials match stored credentials
    if (email === storedEmail && password === storedPassword) {
      // Call parent function to handle login
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <Navbar />
      <div></div>
      <div className="login-page">
        <div className="login-head">
          <h2>Login</h2>
          <p>
            Don't have an account?<Link to="/register">Create an account</Link>
          </p>
        </div>

        {/* Login form */}

        <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4 login-label">
            <label for="validationCustom01" class="form-label">
              User name
            </label>
            <input
              type="email"
              class="form-control"
              id="validationCustom01"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-md-4 login-label">
            <label for="validationCustom02" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="validationCustom02"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-12 login-btn">
            <button class="btn btn-primary" type="submit" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
