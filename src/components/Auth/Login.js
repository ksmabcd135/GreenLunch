import React from "react";
import { GoogleLogin } from "react-google-login";

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Success] current User:", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };
  return (
    <div>
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
