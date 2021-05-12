import { useState } from "react";
import Reservation from "./Reservation/Rerservation";
import styles from "./Reservations.module.css";

//reservation card views weill come to this func
const Reservations = () => {
  const [items, setItems] = useState([]);
  const [register, setRegister] = useState(false);
  const registerReservation = () => {
    setRegister(prevRegister => !prevRegister);
    console.log(register);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button className={styles.fab} onClick={registerReservation}>+</button>
        {items}
      </div>
    </div>
  );
};
export default Reservations;
