import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const onSuccess = () => {
    alert("Logout Success!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
