import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../store/authContext";
import logo from "../assets/logo.png";

const Header = () => {
  const authContext = useContext(AuthContext);

  let location = useLocation();
  let savedCountriesRoute = location.pathname === "/savedCountries";

  return (
    <header>
      <Link to="/" className="nav-link logo-name">
        <img src={logo} alt="world-logo" className="logo-img" />
        Country Flashcards
      </Link>
      {authContext.token ? (
        <nav>
          {savedCountriesRoute ? (
            <Link className="nav-link" to="/countries">
              ALL FLASHCARDS
            </Link>
          ) : (
            <Link className="nav-link" to="/savedCountries">
              SAVED COUNTRIES
            </Link>
          )}
          <a className="nav-link" onClick={authContext.logout} href="/">
            LOGOUT
          </a>
          <img
            className="home-country-flag"
            src={`${authContext.homeCountry}`}
          />
        </nav>
      ) : (
        <nav>
          <Link className="nav-link" to="/login">
            LOGIN
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
