import React from 'react';

import { useGoogleAuth } from './LoginWrapper';

require("dotenv").config();

function Login() {
  const { signIn } = useGoogleAuth();
  return (
    <button onClick={signIn}>Google Login</button>
  );
}

export default Login;