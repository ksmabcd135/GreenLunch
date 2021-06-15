import { useState,useEffect } from "react";
import styles from "./LocalSignin.module.css";
import { gql, useQuery } from "@apollo/client";

const LocalSignin = () => {
  //state for siginin
  const [idText, setIdText] = useState("");
  const [pwText, setPwText] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        idText.trim().length > 6 && pwText.trim().length > 6
      );
    }, 500);
    return () => { clearTimeout(identifier) };
  }, [idText, pwText]);

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
      <input
        type="text"
        placeholder="ID"
        value={idText}
        onChange={idTextChangeHandler}
      />
      <input
        type="password"
        placeholder="PW"
        value={pwText}
        onChange={pwTextChangeHandler}
      />
      <p>Forgot your password?</p>
      <button type="submit" disabled={!formIsValid}>SIGNIN</button>
    </form>
  );
};

export default LocalSignin;
