import React, {PureComponent} from 'react';
import classes from './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';

library.add(Icon.faArrowAltCircleDown);
library.add(Icon.faArrowAltCircleUp);
library.add(Icon.faTimesCircle);

export const AuthContext = React.createContext(false);

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
    }

    componentWillMount() {
        console.log('[App.js] Inside ComponentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('UPDATE [App.js] Inside componentWillReceiveProps', nextProps);
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log('UPDATE [App.js] Inside shouldComponentUpdate', nextProps, nextState);
        return nextState.persons !== this.state.persons ||
            nextState.showPersons !== this.state.showPersons;
    }*/

    componentWillUpdate(nextProps, nextState) {
        console.log('UPDATE [App.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('UPDATE [App.js] Inside componentDidUpdate');
    }

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
            },
            {
                id: "qwq3142",
                name: "Fernández",
                age: 23
            },
            {
                id: "qwq3412",
                name: "Monje",
                age: 23
            },
            {
                id: "qwq3e12",
                name: "Remigio",
                age: 23
            },
            {
                id: "qwqr312",
                name: "Javier",
                age: 23
            },
            {
                id: "qr312",
                name: "Fernández",
                age: 23
            }
        ],
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
    };

    deletePersonHandler = (idx) => {
        const persons = [...this.state.persons];
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

    togglePersonsHandler = () => {
        this.setState((previousState) => {
            return {
                showPersons: !previousState.showPersons,
                toggleClicked: previousState.toggleClicked + 1
            }
        })
    };

    loginHandler = () => {
        this.setState({authenticated: true});
    };

    render() {
        console.log('[App.js] Inside Render');

        let listPerson = null;

        if (this.state.showPersons) {
            listPerson = <Persons
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
                persons={this.state.persons}/>
        }
        ;

        return (
            <Aux>
                <Cockpit
                    title={this.props.title}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                    showPersons={this.state.showPersons}/>
                <AuthContext.Provider value={this.state.authenticated}>
                    {listPerson}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
