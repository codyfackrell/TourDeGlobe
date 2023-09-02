import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main-img">
      <Link className="button begin-btn" to="/countries">
        Begin
      </Link>
    </div>
  );
};

export default HomePage;
