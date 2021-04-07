import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "565601053406-4h26g5f2lioi07q0p68tq7b76je9dl9g.apps.googleusercontent.com";

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
