import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "565601053406-4h26g5f2lioi07q0p68tq7b76je9dl9g.apps.googleusercontent.com";

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
