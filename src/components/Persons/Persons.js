import React from 'react';
import Person from "./Person/Person";

const persons = (props) =>
    props.persons.map((person, idx) => {
        return <Person key={person.id} click={() => props.clicked(idx)}
                       change={(event) => props.changed(event, person.id)}
                       name={person.name}
                       age={person.age}
        />
    });

export default persons;
