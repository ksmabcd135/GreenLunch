import React from "react";
import classes from "./Auth.css";
import logo from "../../img/abo4.svg";
import { signIn, signOut } from "../../actions";
import { link } from "react-router-dom";
import { connect } from "react-redux";

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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
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

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>SignOut</button>;
    } else {
      return <button onClick={this.onSignInClick}>SignIn</button>;
    }
  };

  render() {
    return (
      <div className={classes.Wrapper}>
        <p>Google SignIn</p>
        <img src={logo} />
        <div>{this.renderAuthButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(Auth);
