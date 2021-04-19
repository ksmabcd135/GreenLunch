import { useState } from "react";

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
    <form onSubmit={localSiginHandler}>
      <div>
        <label>ID</label>
        <input type="text" value={idText} onChange={idTextChangeHandler} />
      </div>
      <div>
        <label>PASSWORD</label>
        <input type="password" value={pwText} onChange={pwTextChangeHandler} />
      </div>
      <button type="submit">SIGNIN</button>
    </form>
  );
};

export default LocalSignin;
