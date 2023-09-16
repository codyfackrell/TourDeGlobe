import React, { createContext, useContext, useState } from "react";
import CountryContext from "./countryContext";
import AuthContext from "./authContext";
import axios from "axios";

const StarContext = createContext();

export const useStarContext = () => useContext(StarContext);

export const StarProvider = ({ children }) => {
  const countryContext = useContext(CountryContext);
  const authContext = useContext(AuthContext);

  const [starSelected, setStarSelected] = useState(false);

  const starClick = async () => {
    const countryCode = countryContext.countryCode;
    const userId = authContext.userId;

    if (authContext.token) {
      if (!starSelected) {
        // adding to savedCountries
        axios
          .post(`http://localhost:4000/saved-countries`, {
            countryCode,
            userId,
          })
          .then(() => setStarSelected(true));
      } else {
        // removing from savedCountries
        axios
          .delete(`http://localhost:4000/saved-countries/${countryCode}`, {
            data: { userId: userId },
          })
          .then(() => setStarSelected(false));
        console.log("Deleted");
      }
    } 
  };

  return (
    <StarContext.Provider
      value={{ starSelected, setStarSelected, starClick}}
    >
      {children}
    </StarContext.Provider>
  );
};
