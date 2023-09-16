import React, { useContext } from "react";
import CountryContext from "../../store/countryContext";
import FrontFlashcard from "./FrontFlashcard";
import BackFlashcard from "./BackFlashcard";
import Star from "./Star";

const DisplayedFlashcard = ({ handleFlip, handleNext }) => {
  const countryContext = useContext(CountryContext);

  return (
    <div className="flashcard displayed-card">
      <Star />
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
