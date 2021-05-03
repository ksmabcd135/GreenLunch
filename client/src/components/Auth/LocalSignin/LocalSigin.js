import { useState } from "react";
import styles from "./LocalSignin.module.css";

const LocalSignin = () => {
  //state for siginin
  const [idText, setIdText] = useState("");
  const [pwText, setPwText] = useState("");
  //handlers
  const idTextChangeHandler = (event) => {
    setIdText(event.target.value);
  };
  const pwTextChangeHandler = (event) => {
    setPwText(event.target.value);
  };
  const localSiginHandler = (event) => {
    event.preventDefault();
    console.log(idText, pwText);
  };

  return (
    <form onSubmit={localSiginHandler} className={styles.form}>
      <h2>SIGNIN</h2>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={idText}
          onChange={idTextChangeHandler}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="PW"
          value={pwText}
          onChange={pwTextChangeHandler}
        />
      </div>
      <p>Forgot your password?</p>
      <button type="submit">SIGNIN</button>
    </form>
  );
};

export default LocalSignin;
