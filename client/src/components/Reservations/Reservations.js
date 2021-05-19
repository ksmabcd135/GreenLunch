import React, { useState } from "react";
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
  const saveExpenseReservationHandler = (expenseReservation) => {
    setItems((prevExpenses) => {
      return [items, ...prevExpenses];
    });
  };
  return (
    <React.Fragment>
      {register && <AddReservation
        onRegister={register}
        onExpenseReservation={saveExpenseReservationHandler}
      />}
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <button className={styles.fab} onClick={registerReservation}>+</button>
          {items.map(item => <Reservation title={item.title}/>)}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Reservations;
