import React from 'react';
import classes from './Reservations.css';
import Reservation from './Reservation/Rerservation';

const reservations = () => {
    return (
        <div className={classes.Container}>
            <Reservation/>
        </div>
    )
}

export default reservations;