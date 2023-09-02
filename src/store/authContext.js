import React, { useState, createContext } from "react";

let logoutTimer;

const AuthContext = createContext({
    token: "",
    userId: null,
    login: () => {}, 
    logout: () => {},
});

const calculateRemainingTime = (expTime) => {
  const currentTime = new Date().getTime();
  const remainingTime = expTime - currentTime;
  return remainingTime;
};

const getLocalData = () => {
  const storedToken = localStorage.getItem("token");
  const storedExp = localStorage.getItem("expTime");

  const remainingTime = calculateRemainingTime(storedExp);

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const localData = getLocalData();

  let initialToken;

  if (localData) {
    initialToken = localData.token;
  }

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(null);

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    localStorage.removeItem("userId");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const login = (token, exp, userId) => {
    setToken(token);
    setUserId(userId);
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", exp);
    localStorage.setItem("userId", userId);

    const remainingTime = calculateRemainingTime(exp);

    logoutTimer = setTimeout(logout, remainingTime);
  };

  const contextValue = {
    token,
    userId,
    login, 
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue} >
        {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
