import React, { useContext, useState } from "react";
import CountryContext from "../../store/countryContext";
import FrontFlashcard from "./FrontFlashcard";
import BackFlashcard from "./BackFlashcard";
import Star from "./Star";

const DisplayedFlashcard = ({
  starSelected,
  setStarSelected,
  handleFlip,
  handleNext,
}) => {
  const countryContext = useContext(CountryContext);

  return (
    <div className="flashcard displayed-card">
      <Star starSelected={starSelected} setStarSelected={setStarSelected} />
      <FrontFlashcard
        displayCountry={countryContext.randomCountry}
        handleFlip={handleFlip}
        handleNext={handleNext}
      />
      <BackFlashcard
        displayCountry={countryContext.randomCountry}
        handleFlip={handleFlip}
        handleNext={handleNext}
      />
    </div>
  );
};

export default DisplayedFlashcard;
