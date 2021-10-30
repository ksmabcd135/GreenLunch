import React, { useState, useEffect,useC } from "react";
import axios from 'axios';
import Reservation from "./Reservation/Rerservation";
import AddReservation from "../Reservations/AddReservation/AddReservation";
import styles from "./Reservations.module.css";

//reservation card views weill come to this func
const Reservations = () => {
  const [items, setItems] = useState([]);
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 
    fetchScheduleHandler();
  },[])
  const registerReservation = () => {
    setRegister(true);
  };
  const saveExpenseReservationHandler = (expenseReservation) => {
    setItems((prevExpenses) => {
      return [...prevExpenses, expenseReservation];
    });
    setRegister(false);
  };

  //api to get schedules
  const fetchScheduleHandler = () => {
    return axios.get('http://localhost:8080/schedules')
      .then(res => { 
        console.log(res.data);
        const data = res.data.data;
        const schedules = data.map(schedule => {
          return {
            id: schedule.ID,
            title: schedule.Title,
            message: schedule.Message
          }
        })
        setItems(schedules);
      })
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
      {register && <AddReservation
        onRegister={register}
        onExpenseReservation={saveExpenseReservationHandler}
      />}
      <div className={styles.container}>
        <button className={styles.fab} onClick={registerReservation}>+</button>
        {items.map(item => <Reservation key={ item.id } item={item}/>)}
      </div>
    </React.Fragment>
  );
};
export default Reservations;
