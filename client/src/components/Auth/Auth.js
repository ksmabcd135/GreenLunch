import LocalSigin from "./LocalSignin/LocalSigin";
import Card from "../UI/Card";

import "./Auth.css";
const Auth = () => {
  return (
    <div>
      <Card className="auth-form">
        <LocalSigin />
      </Card>
    </div>
  );
};

export default Auth;
