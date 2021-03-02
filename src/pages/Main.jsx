import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Rerservations from '../components/Reservations/Reservations';

function MainPage() {
    return(
        <div>
            <Sidebar/>
            Main Page...
            <Rerservations/>
        </div>
    )
}

export default MainPage;