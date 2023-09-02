import axios from "axios";
import React, { useState, createContext } from "react";
import initialCountry from "./initialCountry";

const CountryContext = createContext();

export function CountryProvider(props) {
  const [randomCountry, setRandomCountry] = useState(initialCountry);
  const [countryCode, setCountryCode] = useState("")

  const retrieveCountry = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      const random = Math.floor(Math.random(res.data) * res.data.length);
      setRandomCountry(res.data[random]);
      setCountryCode(res.data[random].cca2);
    });
  };

  const contextValue = {
    randomCountry,
    countryCode,
    retrieveCountry,
  }

  return (
    <CountryContext.Provider value={contextValue}>
        {props.children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
