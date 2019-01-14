import React, {Component} from 'react';
import classes from './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import Person from "./components/Person/Person";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

library.add(Icon.faArrowAltCircleDown);
library.add(Icon.faArrowAltCircleUp);
library.add(Icon.faTimesCircle);

class App extends Component {
    state = {
        persons: [
            {
                id: "wqe12",
                name: "Remigio",
                age: 24
            },
            {
                id: "qwq312",
                name: "Javier",
                age: 23
            }
        ],
        showPersons: false
    };

    switchNameHandler = () => {
        this.setState({
            persons:
                [
                    {
                        id: "gq312",
                        name: "Javier",
                        age: 23
                    },
                    {
                        id: "qdw312",
                        name: "Remigio",
                        age: 25
                    },
                    {
                        id: "qwn312",
                        name: "Fernandez",
                        age: 26
                    }
                ]
        })
    };

    deletePersonHandler = (idx) => {
        const persons = this.state.persons;
        persons.splice(idx, 1);
        this.setState({
            persons: persons
        })
    };

    nameChangeHandler = (event, id) => {
        const personIdx = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIdx]};
        //const person = Object.assign({},this.state.persons[personIdx])

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIdx] = person;
        this.setState({
            persons: persons
        })
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    render() {
        let listPerson = null;
        let btnClass = '';

        if (this.state.showPersons) {
            listPerson = (<div> {this.state.persons.map((person, idx) => {
                    return <ErrorBoundary  key={person.id}>
                        <Person click={() => this.deletePersonHandler(idx)}
                                change={(event) => this.nameChangeHandler(event, person.id)}
                                name={person.name}
                                age={person.age}
                               />
                    </ErrorBoundary>
                })}
                </div>
            )
            ;
            btnClass = classes.Red;
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.Red);
        }

        return (
            <div className={classes.App}>
                <p className={assignedClasses.join(' ')}>Hello!!!</p>
                <button className={btnClass} onClick={this.tooglePersonsHandler}>
                    Switch Names
                </button>
                {listPerson}
            </div>
        );
    }
}

export default App;
