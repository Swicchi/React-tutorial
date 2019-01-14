import React from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {
    const assignedClasses = [];
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.Red);
    }
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    return (
        <div className={classes.Cockpit}>
            <p className={assignedClasses.join(' ')}>Hello!!!</p>
            <button className={btnClass} onClick={props.clicked}>
                Switch Names
            </button>
        </div>);
};

export default cockpit;
