import React from "react";
import Navbar from "../navbar/Navbar";
import "./Profile.scss";

const Profile = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-info">
          <h2>Profile</h2>
          <p>
            <span>NAME : </span> {localStorage.getItem("username")}
          </p>
          <p>
            <span>EMAIL : </span> {localStorage.getItem("email")}
          </p>
          <p>
            <span>PHONE :</span> {localStorage.getItem("phone")}
          </p>
        </div>
        <div className="profile-logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
