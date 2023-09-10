import React, { useContext, useEffect } from "react";
import CountryContext from "../../store/countryContext";
import DisplayedFlashcard from "./DisplayedFlashcard";

const Flashcards = () => {
  const countryContext = useContext(CountryContext)

  useEffect(() => {
    countryContext.retrieveCountry()
  }, [])

  return (
    <>
      <h2>What country is this?</h2>
      <DisplayedFlashcard />
      <div className="flashcard second"></div>
      <div className="flashcard third" />
    </>
  );
};

export default Flashcards;
