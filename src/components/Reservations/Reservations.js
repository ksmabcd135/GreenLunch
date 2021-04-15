import { useState } from "react";
import classes from "./Reservations.css";
import Reservation from "./Reservation/Rerservation";

const Reservations = () => {
  const [items, setItems] = useState([]);
  const appendItem = () => {
    const newItem = <Reservation />;
    setItems([...items, newItem]);
  };
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Container}>
        <button onClick={appendItem}>ADD Item</button>
        {items}
      </div>
    </div>
  );
};
export default Reservations;
