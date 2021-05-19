import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import Card from '../../UI/Card';
import styles from './AddReservation.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>
}
const RegisterDialog = (props) => {
  
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
      title.trim().length > 0 && text.trim().length > 0);
  }, 500);
  return () => { clearTimeout(identifier) };
  }, [title, text]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(props);
    const newReservation = {
      title: title,
      text: text,
      date: date,
    };
    props.onTest({...newReservation});
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
        <button type="submit" disabled={!formIsValid}>OK</button>
        <button type="cancel">CANCEL</button>
      </form>
    </Card>
  )
}

const AddReservation = (props) => {
  const formHandler = (data) => {
    console.log(`fromAddReservation >${data}`)
    props.onExpenseReservation(data)
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<RegisterDialog onTest={formHandler}/>, document.getElementById('register-reservation'))}
    </React.Fragment>
  )
}
export default AddReservation;