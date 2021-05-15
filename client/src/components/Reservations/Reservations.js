import React from "react";
import { useState } from "react";
import Reservation from "./Reservation/Rerservation";
import AddReservation from "../Reservations/AddReservation/AddReservation";
import styles from "./Reservations.module.css";

//reservation card views weill come to this func
const Reservations = () => {
  const [items, setItems] = useState([]);
  const [register, setRegister] = useState(false);
  const registerReservation = () => {
    setRegister(true);
    console.log(register);
  };
  return (
    <React.Fragment>
      {register && <AddReservation onRegister={register}/>}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <button className={styles.fab} onClick={registerReservation}>+</button>
          {items}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Reservations;
