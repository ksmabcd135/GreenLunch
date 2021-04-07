import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import classes from "./Auth.css";
import logo from "../../img/abo4.svg";

class Auth extends React.Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <p>Sign In</p>
        <img src={logo} />
        <Login />
        <Logout />
      </div>
    );
  }
}

export default Auth;
