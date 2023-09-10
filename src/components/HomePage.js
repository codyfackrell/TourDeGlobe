import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
const HomePage = () => {
  return (
    <div className="main-img">
      <Link className="button begin-btn" to="/countries">
        Begin
      </Link>
      <Footer className='home-footer'/>
    </div>
  );
};

export default HomePage;
