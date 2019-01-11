import React, {Component} from 'react';
import Person from './components/Person/Person'
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import * as Icon from '@fortawesome/free-solid-svg-icons'

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

    nameChangeHandler = (event,id) => {
        const personIdx = this.state.persons.findIndex(p =>{
            return p.id === id;
        });

        const person = {...this.state.persons[personIdx]};
        //const person = Object.assign({},this.state.persons[personIdx])

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIdx] = person;
        this.setState({
            persons:persons
        })
    };

    tooglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
        })
    };

    render() {
        const style = {
            cursor: 'pointer',
            color: '#131',
            font: 'inherit',
            border: '1px solid blue',
            backgroundColor: '#3f3',
            padding: '8px',
            margin: '10px',
        };

        let listPerson = null;

        if (this.state.showPersons) {
            listPerson = (<div> {this.state.persons.map((person, idx) =>
                <Person click={() => this.deletePersonHandler(idx)}
                         change={(event)=>this.nameChangeHandler(event,person.id)}
                         name={person.name}
                         age={person.age}
                         key={person.id}/>)}
            </div>);
        }

        return (
            <div className="App">
                <button style={style}
                        onClick={this.tooglePersonsHandler}>
                    Switch Names
                </button>
                {listPerson}
            </div>
        );
    }
}

export default App;
