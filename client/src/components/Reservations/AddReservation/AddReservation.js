import React from "react";
import ReactDOM from 'react-dom';
import Card from '../../UI/Card';
import styles from './AddReservation.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>
}
const RegisterDialog = () => {
  return (
    <Card>
      <form className={styles.modal}>
        <h2>LUNCH登録</h2>
        <input
          type="text"
          placeholder="タイトル"
        />
        <input
          type="password"
          placeholder="内容"
        />
        <input
          type="date"/>
        <button type="submit">登録</button>
        <button>cancel</button>
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