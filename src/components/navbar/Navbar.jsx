import React from "react";
import "./Navbar.scss";
import logo from "../../assets/products/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              <img src={logo}></img>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link to="/" class="navbar-brand">
                  Home
                </Link>
                <Link to="/store" class="navbar-brand">
                  Store
                </Link>
                <Link to="/profile" class="navbar-brand">
                  Profile
                </Link>
                <Link to="/login" class="navbar-brand">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
