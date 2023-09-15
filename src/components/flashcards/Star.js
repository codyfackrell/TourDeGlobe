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
  const updateUserList = countryContext.updateUserList

  const navigate = useNavigate();

  if(usersCountries.includes(currentCountry)) {
    setStarSelected(true);
  }

  useEffect(() => {
    if (usersCountries.includes(currentCountry)) {
      setStarSelected(true);
      console.log("1", starSelected);
    } else {
      setStarSelected(false);
      console.log("2", starSelected);
    }
  }, []);

  const starClick = async () => {
    const countryCode = countryContext.countryCode;
    const userId = authContext.userId;

    if (authContext.token) {
      if (!starSelected) {
        // adding to savedCountries
        axios
          .post(`http://localhost:4000/saved-countries`, {
            countryCode,
            userId,
          })
          .then(() => setStarSelected(true));
      } else {
        // removing from savedCountries
        axios
          .delete(`http://localhost:4000/saved-countries/${countryCode}`, {
            data: { userId: userId },
          })
          .then(() => setStarSelected(false));
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
