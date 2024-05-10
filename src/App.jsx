import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Home from "./components/Home/Home";
import Store from "./components/store/Store";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const registered = localStorage.getItem("isRegistered");
    if (registered) {
      setIsRegistered(true);
    }

    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleRegister = (username, password) => {
    // Retrieve existing credentials or initialize an empty array
    const credentials = JSON.parse(localStorage.getItem("credentials")) || [];

    // Add new credentials to the array
    credentials.push({ username, password });

    // Store updated credentials in localStorage
    localStorage.setItem("credentials", JSON.stringify(credentials));

    setIsRegistered(true);
    localStorage.setItem("isRegistered", true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.removeItem("isLoggedOut"); // Clear logout flag on login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.setItem("isLoggedOut", true); // Set logout flag on logout
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/register"
            element={<Register onRegister={handleRegister} />}
          />
          <Route
            path="/login"
            element={
              isRegistered && !isLoggedIn ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/profile" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isLoggedIn ? (
                <Profile onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
