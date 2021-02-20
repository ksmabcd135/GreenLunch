import React from 'react';
import test from './Person.css';

const PersonInput = () => {
    return (
        <div className={test.top}>
            <p>Person Name</p>
            <input type="text"></input>
        </div>
    )
}

export default PersonInput;