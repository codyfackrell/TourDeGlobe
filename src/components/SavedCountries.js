import React, { useContext, useEffect } from "react";
import DisplayedFlashcard from "./flashcards/DisplayedFlashcard";
import CountryContext from "../store/countryContext";

const SavedCountries = () => {
  const countryContext = useContext(CountryContext);

  useEffect(() => {
    countryContext.retrieveUsersCountries();
  }, []);

  return (
    <>
      <h2>Practice the countries you want to master!</h2>
      <DisplayedFlashcard />
      <div className="flashcard second"></div>
      <div className="flashcard third" />
    </>
  );
};

export default SavedCountries;
