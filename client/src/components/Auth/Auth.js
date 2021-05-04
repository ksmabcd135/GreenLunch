import LocalSigin from "./LocalSignin/LocalSigin";
import Card from "../UI/Card";

import "./Auth.css";
const Auth = () => {
  return (
    <Card className="auth-form">
      <LocalSigin />
    </Card>
  );
};

export default Auth;
