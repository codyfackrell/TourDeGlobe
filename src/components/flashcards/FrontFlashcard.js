import React from "react";

const FrontFlashcard = ({ displayCountry, handleFlip, handleNext }) => {  
  const langugages = Object.values(displayCountry.languages).map((language) => language)

  return (
    <>
      <div className="flag-img-container">
        <img
          className="flag-img"
          src={displayCountry.flags.png}
          alt="guess-country-flag"
        />
      </div>
      <table className="country-info">
        <tr>
          <td>Capital: </td>
          <td>{displayCountry.capital ? displayCountry.capital : "N/A"}</td>
        </tr>
        <tr>
          <td>Population: </td>
          <td>{displayCountry.population.toLocaleString("en-US")}</td>
        </tr>
        <tr>
          <td>Languages: </td>
          <td>
            {langugages.join(", ")}
          </td>
        </tr>
      </table>

      <div className="card-btns">
        <button className="button" onClick={handleFlip}>
          Country Name
        </button>
        <button className="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
};

export default FrontFlashcard;
