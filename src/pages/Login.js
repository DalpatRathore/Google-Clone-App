import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { TextField, Button } from "@material-ui/core";

const Login = () => {
  const login = e => {
    e.preventDefault();
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg"
          alt=""
          className="login__logo"
        />
      </Link>

      <h2>Sign in</h2>
      <h3>Use your Google Account</h3>
      <form className="login__form">
        <TextField label="Email or Phone" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <div className="login__formButtonContainer">
          <Link to="/">
            <Button type="Submit" variant="contained" color="primary">
              Login
            </Button>
          </Link>
          <Link to="/">
            <Button variant="contained">Cancel</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
