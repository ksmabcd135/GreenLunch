import React, { useState, useEffect } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';
import Card from '../../UI/Card';
import styles from './AddReservation.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>
}
const RegisterDialog = (props) => {
  
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
      title.trim().length > 0 && message.trim().length > 0 && date);
  }, 500);
  return () => { clearTimeout(identifier) };
  }, [title, message, date]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newReservation = {
      title: title,
      message: message
    };

    axios.post(
      'http://localhost:8080/new-schedule',
      {
        Title: newReservation.title,
        Message: newReservation.message
      })
      .then(res => { 
        console.log(newReservation);
        props.onExpenseReservation({...newReservation});
      })
      .catch(err => { 
        console.log(err)
      })
  }
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onMessageChange = (event) => {
    setMessage(event.target.value);
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
          onChange={onMessageChange}
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
    props.onExpenseReservation(data)
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(<RegisterDialog onExpenseReservation={formHandler}/>, document.getElementById('register-reservation'))}
    </React.Fragment>
  )
}
export default AddReservation;