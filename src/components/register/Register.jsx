import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Register.scss";
import faEyeSlash from "../../assets/products/open-eye.png";
import faEye from "../../assets/products/eye.png";

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    // Store data in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    // Call parent function to handle registration
    onRegister();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Limit to 10 digits
    const formattedValue = numericValue.slice(0, 10);
    setPhone(formattedValue);
  };

  return (
    <div>
      <Navbar />
      <div className="register-page">
        <h2 className="register-head">Register</h2>

        {/* Register form */}
        <form className="row g-3 needs-validation" noValidate>
          <div className="col-md-4 register-lab">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-4 register-lab">
            <label htmlFor="validationCustom02" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="validationCustom02"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter a valid email address")
              }
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-4 register-lab">
            <label htmlFor="validationCustom02" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom02"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-md-4 register-lab">
            <label htmlFor="validationCustom02" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="validationCustom02"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                <img src={showPassword ? faEyeSlash : faEye} alt="Password" />
              </span>
            </div>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-12 register-btn">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleRegister}
            >
              <a href="/login">Register</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
