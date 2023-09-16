import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../store/authContext";

const Login = () => {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios.post(`http://localhost:4000/login`, body).then((res) => {
      navigate('/')
      authContext.login(res.data.token, res.data.exp, res.data.userId, res.data.homeCountry);
      console.log('LOGIN COMPLETED', res.data)
    })
  };

  return (    
    <div className="align-labels">
      <form onSubmit={submitHandler} >
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)}/>
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password"/>
        <button className="button">Login</button>
        <Link className="create-login-link" to="/register">
          Create an Account
        </Link>
      </form>
      <footer className="footer">codyfackrell, 2023</footer>
    </div>
  );
};

export default Login;
