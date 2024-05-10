import React from "react";
import Navbar from "../navbar/Navbar";
import "./Home.scss";
import { Link } from "react-router-dom";
import home from "../../assets/products/home.jpg";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="home-banner">
          <img src={home} alt="Home Banner" className="banner-image" />
          <img
            src="https://i.pinimg.com/236x/9d/6e/27/9d6e27f3b5c7af7ef177b04f91107c63.jpg"
            alt="Home Banner"
            className="banner-image-mob"
          />

          <div className="text-container">
            <h1 className="banner-text">
              Transform Your Space: <br />
              Discover Inspired Home Decor
            </h1>
            <br></br>
            <button className="home-btn">
              <Link className="home-link" to="/store">
                Store
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
