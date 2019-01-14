import React from 'react';
import classes from "./Cockpit.css";
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    const assignedClasses = [];
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.Red);
    }
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    return <Aux>
        <p className={assignedClasses.join(' ')}>{props.title}</p>
        <button className={btnClass} onClick={props.clicked}>
            Switch Names
        </button>
    </Aux>;
};

export default cockpit;
