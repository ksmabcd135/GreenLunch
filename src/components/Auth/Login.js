import React from "react";
import CssCls from "./Login.css";
import logo from "../../img/abo4.svg";
import { GoogleLogin } from "react-google-login";

const clientId = "test";

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] current User:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };
  return (
    <div className={CssCls.Wrapper}>
      <img src={logo} />
      <p>Sign In</p>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
