import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from "../../../hoc/WithClass";
import {AuthContext} from "../../../containers/App";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside ComponentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if (this.props.position === 0)
            this.focus();
    }

    componentDidUpdate() {
        this.focus();
    }

    focus() {
        if (this.state.status)
            this.inputElement.current.focus();
    }

    state = {
        status: false
    };

    aHandler = () => {
        this.setState((previousState) => {
                return {
                    status: !previousState.status
                }
            }
        )
    };

    render() {
        console.log('[Person.js] Inside render');

        const iconStyle = {
            marginLeft: 80
        };

        const inputStyle = {
            background: '#cfc'
        };

        return (
            <Aux>
                <AuthContext.Consumer>
                {auth => auth?<p>I'm authenticated</p>:null}
                </AuthContext.Consumer>
                <div>
                    {this.state.status ?
                        <FontAwesomeIcon onClick={this.aHandler} icon={"arrow-alt-circle-up"}/> :
                        <FontAwesomeIcon onClick={this.aHandler} icon={"arrow-alt-circle-down"}/>}
                    <FontAwesomeIcon style={iconStyle} onClick={this.props.click} icon={"times-circle"}/>
                </div>
                <h1>{this.props.name}</h1>
                {this.state.status &&
                <div className={classes['data']}>
                    <p>Your age: {this.props.age}</p>
                    <input
                        ref={this.inputElement}
                        style={inputStyle}
                        type='text'
                        value={this.props.name}
                        onChange={this.props.changed}/>
                </div>}
            </Aux>);
    }
}

Person.protoType = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,classes.Person);
