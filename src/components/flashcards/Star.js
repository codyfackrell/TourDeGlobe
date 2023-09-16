import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CountryContext from "../../store/countryContext";
import AuthContext from "../../store/authContext";
import { useStarContext } from "../../store/starContext";
import { AiTwotoneStar } from "react-icons/ai";

const Star = () => {
  const countryContext = useContext(CountryContext);
  const authContext = useContext(AuthContext);

  const navigate = useNavigate();

  const usersCountries = countryContext.usersCountryCodes;
  const currentCountry = countryContext.countryCode;
  const {starSelected, setStarSelected, starClick } = useStarContext();
  
 useEffect(() => {
  if(usersCountries.includes(currentCountry)) {
    setStarSelected(true)
  } else {
    setStarSelected(false)
  }
 }, [usersCountries, currentCountry]);


 const handleStarClick = () => {
  if (authContext.token) {
    starClick()
  } else {
    navigate('/login')
  }
 }

  return (
    <AiTwotoneStar
      className={`star ${starSelected ? "star-selected" : ""}`}
      onClick={handleStarClick}
    />
  );
};

export default Star;
