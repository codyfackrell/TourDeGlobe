import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CountryContext from "../../store/countryContext";
import FrontFlashcard from "./FrontFlashcard";
import BackFlashcard from "./BackFlashcard";
import Star from "./Star";

const DisplayedFlashcard = () => {
  const countryContext = useContext(CountryContext);

  let location = useLocation();
  let savedCountriesRoute = location.pathname === "/savedCountries";

  const [flashcard, setFlashcard] = useState(true);
  const [starSelected, setStarSelected] = useState(false);

  const handleFlip = () => {
    flashcard ? setFlashcard(false) : setFlashcard(true);
  };

  const handleNext = () => {
    {savedCountriesRoute ? countryContext.retrieveUsersCountries() : countryContext.retrieveCountry()}
    setFlashcard(true);
    setStarSelected(false);
  };

  return (
    <div className="flashcard">
      <Star starSelected={starSelected} setStarSelected={setStarSelected} />
      {flashcard ? (
        <FrontFlashcard
          displayCountry={countryContext.randomCountry}
          handleFlip={handleFlip}
          handleNext={handleNext}
        />
      ) : (
        <BackFlashcard
          displayCountry={countryContext.randomCountry}
          handleFlip={handleFlip}
          handleNext={handleNext}
        />
      )}
    </div>
  );
};

export default DisplayedFlashcard;
