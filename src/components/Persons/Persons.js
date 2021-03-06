import React, {PureComponent} from 'react';
import Person from "./Person/Person";

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.lastPersonRef = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] Inside ComponentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
        this.lastPersonRef.current.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log('UPDATE [Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    /* shouldComponentUpdate(nextProps, nextState) {
         console.log('UPDATE [Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
         return nextProps.persons !== this.props.persons ||
             nextProps.clicked !== this.props.clicked ||
             nextProps.changed !== this.props.changed;
     }*/

    componentWillUpdate(nextProps, nextState) {
        console.log('UPDATE [Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('UPDATE [Persons.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] Inside render');

        return this.props.persons.map((person, idx) => {
            return <Person key={person.id}
                           click={() => this.props.clicked(idx)}
                           changed={(event)=>this.props.changed(event,person.id)}
                           name={person.name}
                           position={idx}
                           ref={this.lastPersonRef}
                           age={person.age}/>
        });
    }
}

export default Persons;
