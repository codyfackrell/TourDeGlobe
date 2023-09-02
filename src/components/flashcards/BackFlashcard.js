import React from "react";

const BackFlashcard = ({ displayCountry, handleFlip, handleNext }) => {
  return (
    <div className="back">
      <h3 className="country-name">{displayCountry.name.common}</h3>
      <div className="flag-img-container">
        <img
          className="flag-img"
          src={displayCountry.flags.png}
          alt="guess-country-flag"
        />
      </div>
      <a
        className="map-link"
        href={displayCountry.maps.googleMaps}
        target="_blank"
      >
        See on Map
      </a>
      <div className="card-btns">
        <button className="button" onClick={handleFlip}>
          Back to Details
        </button>
        <button className="button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default BackFlashcard;
