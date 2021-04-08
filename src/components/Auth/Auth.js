import React from "react";
import classes from "./Auth.css";
import logo from "../../img/abo4.svg";
import Login from "./Login";
import Logout from "./Logout";
import { logIn, logOut } from "../../actions";

class Auth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load
  }
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
