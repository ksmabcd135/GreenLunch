import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin'

require("dotenv").config();

const GoogleAuthContext = React.createContext();
const userId = process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID;
export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: userId
  })

  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)