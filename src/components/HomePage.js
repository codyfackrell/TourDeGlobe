import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main-img">
      <Link className="button begin-btn" to="/countries">
        Begin
      </Link>
      <footer className="home-footer">codyfackrell, 2023</footer>
    </div>
  );
};

export default HomePage;
