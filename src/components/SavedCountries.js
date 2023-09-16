import React, { useContext, useEffect, useState } from "react";
import DisplayedFlashcard from "./flashcards/DisplayedFlashcard";
import CountryContext from "../store/countryContext";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const SavedCountries = () => {
  const countryContext = useContext(CountryContext);


  console.log(countryContext.usersCountryCodes.length)
  const [flashcard, setFlashcard] = useState(true);

  let location = useLocation();
  let savedCountriesRoute = location.pathname === "/savedCountries";

  const handleFlip = () => {
    flashcard ? setFlashcard(false) : setFlashcard(true);
  };

  const handleNext = () => {
    {
      savedCountriesRoute
        ? countryContext.retrieveUsersCountries()
        : countryContext.retrieveCountry();
    }
    setFlashcard(true);
  };

  useEffect(() => {
    countryContext.retrieveUsersCountries();
  }, []);

  return (
    <>
    {countryContext.usersCountryCodes.length === 0 ? 
    <h2>Save countries you would like to practice!</h2> :
<>
    <h2>Practice the countries you want to master!</h2>
    <div className="flippable-card-container">
      <CSSTransition in={flashcard} timeout={300} classNames="flip">
        <DisplayedFlashcard
          handleFlip={handleFlip}
          handleNext={handleNext}
        />
      </CSSTransition>
    </div>
    <div className="flashcard second"></div>
    <div className="flashcard third" />
</>
}


    </>
  );
};

export default SavedCountries;
