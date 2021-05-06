import { useState,useEffect } from "react";
import "./Reservations.css";
import Reservation from "./Reservation/Rerservation";

//reservation card views weill come to this func
const Reservations = () => {
  const [items, setItems] = useState([]);
  const appendItem = () => {
    const newItem = <Reservation />;
    setItems([...items, newItem]);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <button onClick={appendItem}>ADD Item</button>
        {items}
      </div>
    </div>
  );
};
export default Reservations;
