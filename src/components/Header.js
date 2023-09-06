import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/authContext";

const Header = () => {
  const authContext = useContext(AuthContext)

  return (
    <header>
      <Link to="/">Logo</Link>
        {authContext.token ? (
          <nav>
            <Link className="nav-link" to="/savedCountries">SAVED COUNTRIES</Link>
            <a className="nav-link" onChange={authContext.login} href="/" >LOGOUT</a>
            <img className="home-country-flag" src={`${authContext.homeCountry}`}/>
          </nav>
        ) : (
          <nav>
            <Link className="nav-link" to="/login">LOGIN</Link>
        </nav>
        )
      }
    </header>
  );
};

export default Header;
