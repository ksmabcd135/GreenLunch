import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = "";

function Logout() {
  const onSuccess = () => {
    alert("Logout Success!");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}

export default Logout;
