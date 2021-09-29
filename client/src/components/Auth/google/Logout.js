import React from 'react';
import { useGoogleAuth } from './LoginWrapper';

require("dotenv").config();

function Logout() {
  const { signOut } = useGoogleAuth();
  return (
    <button onClick={signOut}>Logout</button>
  );
}

export default Logout;