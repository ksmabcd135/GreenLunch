import React from "react";
import classes from "./Auth.css";
import logo from "../../img/abo4.svg";
import Login from "./Login";
import Logout from "./Logout";
import { logIn, logOut } from "../../actions";

class Auth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          client_id: process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  retrieveUserStatus() {
    if (this.state.isSignedIn === null) {
      return "UNKNOWN";
    } else if (this.state.isSignedIn) {
      return "SIGNEDIN";
    } else {
      return "NOT SIGNED IN";
    }
  }

  //Auth eventListener
  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return <button onClick={this.onSignOutClick}>SignOut</button>;
    } else {
      return <button onClick={this.onSignInClick}>SignIn</button>;
    }
  };

  render() {
    return (
      <div className={classes.Wrapper}>
        <p>Google Sign In</p>
        <img src={logo} />
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

export default Auth;
