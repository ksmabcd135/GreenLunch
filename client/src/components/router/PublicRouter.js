import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useGoogleAuth } from "../auth/google/LoginWrapper";

const PublicRouter = ({ component: Component, ...rest }) => {
  
  const { isSignedIn } = useGoogleAuth();
  return (
    <div>
      <Route {...rest} render={props => (
        
        !isSignedIn ?
        <Component {...props} /> : 
        <Redirect exact to="/main" />
      )} /> 
    </div>
  )
}

export default PublicRouter;