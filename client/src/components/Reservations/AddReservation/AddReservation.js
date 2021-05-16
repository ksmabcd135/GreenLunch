import React, { useState } from "react";
import ReactDOM from 'react-dom';
import Card from '../../UI/Card';
import styles from './AddReservation.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>
}
const RegisterDialog = () => {
  
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("form is submitted");
    console.log(title, text, date);
  }
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onTextChange = (event) => {
    setText(event.target.value);
  }
  const onDateChange = (event) => {
    setDate(event.target.value);
  }
  return (
    <Card>
      <form className={styles.modal} onSubmit={ formSubmitHandler }>
        <h2>LUNCH登録</h2>
        <input
          type="text"
          placeholder="タイトル"
          onChange={onTitleChange}
        />
        <input
          type="text"
          placeholder="内容"
          onChange={onTextChange}
        />
        <input
          type="date"
          onChange={onDateChange}
        />
        <button type="submit">OK</button>
        <button type="cancel">CANCEL</button>
      </form>
    </Card>
  )
}

const AddReservation = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<RegisterDialog/>, document.getElementById('register-reservation'))}
    </React.Fragment>
  )
}
export default AddReservation;