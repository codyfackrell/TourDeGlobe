import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import CountryContext from "../../store/countryContext";
import DisplayedFlashcard from "./DisplayedFlashcard";

import { useStarContext } from "../../store/starContext";

const Flashcards = () => {
  const countryContext = useContext(CountryContext);
  const { setStarSelected } = useStarContext();

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
    setStarSelected(false);
  };

  useEffect(() => {
    countryContext.retrieveCountry();
  }, []);

  return (
    <>
      <h2>What country is this?</h2>
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
  );
};

export default Flashcards;
