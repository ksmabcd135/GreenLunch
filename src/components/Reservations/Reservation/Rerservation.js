import React from 'react';
import classes from './Reservation.css';
import Title from './Title/Title';
import Footer from './Footer/Footer';

const reservation = () => {
    return(
        <div className={classes.Item}>
            <Title/>
            test grid layout for Reservations items
            <Footer/>
        </div>
    )
}

export default reservation;