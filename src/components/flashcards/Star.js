import React, { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountryContext from "../../store/countryContext";
import AuthContext from "../../store/authContext";
import axios from "axios";
import { AiTwotoneStar } from "react-icons/ai";

const Star = ({ starSelected, setStarSelected }) => {
  const countryContext = useContext(CountryContext);
  const authContext = useContext(AuthContext);
  const usersCountries = countryContext.usersCountryCodes;
  const currentCountry = countryContext.countryCode;

  const navigate = useNavigate();

    // if(usersCountries.includes(currentCountry)) {
    //   setStarSelected(true);
    // } else {
    //   setStarSelected(false)
    // }

  const starClick = () => {
    const countryCode = countryContext.countryCode;
    const userId = authContext.userId;

    if (authContext.token) {
      if (!starSelected) {
        // adding to savedCountries
        setStarSelected(true);
        axios.post(`http://localhost:4000/saved-countries`, {
          countryCode,
          userId,
        });
      } else {
        // removing from savedCountries
        setStarSelected(false);
        axios.delete(`http://localhost:4000/saved-countries/${countryCode}`, {
          data: { userId: userId },
        });
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <AiTwotoneStar
      className={`star ${starSelected ? "star-selected" : ""}`}
      onClick={starClick}
    />
  );
};

export default Star;
