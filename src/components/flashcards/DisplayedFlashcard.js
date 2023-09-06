import React, { useContext, useEffect, useState } from "react";
import CountryContext from "../../store/countryContext";
import FrontFlashcard from "./FrontFlashcard";
import BackFlashcard from "./BackFlashcard";
import Star from "./Star";

const DisplayedFlashcard = () => {
  const countryContext = useContext(CountryContext)

  const [flashcard, setFlashcard] = useState(true);
  const [starSelected, setStarSelected] = useState(false);

  const handleFlip = () => {
    flashcard ? setFlashcard(false) : setFlashcard(true);
  };

  const handleNext = () => {  
    countryContext.retrieveCountry();
    setFlashcard(true);
    setStarSelected(false)
  };

  useEffect(() => {
    countryContext.retrieveCountry()
  }, [])

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
