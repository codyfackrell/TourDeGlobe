import React, { useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CountrySelector from "../../assets/CountrySelector";
import AuthContext from "../../store/authContext";


const Register = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [homeCountry, setHomeCountry] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);

  const checkMatchingPasswords = (e) => {
    const confirmPassword = e.target.value;

    if(confirmPassword !== password) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  };

  const handleSelect = (country) => {
    setHomeCountry(country)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const body = { firstName, homeCountry, username, password };
    
    axios.post('http://localhost:4000/register', body)
    .then((res) => {
      navigate('/')
      authContext.login(res.data.token, res.data.exp, res.data.userId, res.data.homeCountry)
      console.log("AUTH COMPLETED", res.data)
    })
    .catch((err) => {
      console.log(err);
      setFirstName("")
      setUsername("");
      setPassword("");
    })
  }

  return (
    <div className="align-labels">
      <form onSubmit={submitHandler} >
        <label>First Name</label>
        <input onChange={(e) => setFirstName(e.target.value)} />
        <label>Home Country</label>
        <CountrySelector handleSelect={handleSelect} />
        <label>Username</label>
        <input onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" />
        <label>Re-Type Password</label>
        <input onChange={checkMatchingPasswords} type="password" className={!passwordMatch ? "" : "not-matching"}/>          
        <button className="button">Create Account</button>
        <Link className="create-login-link" to="/login">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
