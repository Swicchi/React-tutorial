import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Radium from 'radium';
import './Person.scss';

class Person extends Component {
    state = {
        status: false
    };

    aHandler = () => {
        this.setState({
            status: !this.state.status
        })
    };

    render() {
        const iconStyle = {
            marginLeft: 80
        };

        const inputStyle = {
            background: '#cfc'
        };

        const mediaStyle = {
            '@media(min-width:500px)':{
                width:'450px'
            }
        }

        return (
            <div className="Person" style={mediaStyle}>
                <div>
                    {this.state.status?
                        <FontAwesomeIcon onClick={this.aHandler} icon={"arrow-alt-circle-up"}/>:
                        <FontAwesomeIcon onClick={this.aHandler} icon={"arrow-alt-circle-down"}/>}
                    <FontAwesomeIcon style={iconStyle} onClick={this.props.click} icon={"times-circle"}/>
                </div>
                <h1>{this.props.name}</h1>
                {this.state.status &&
                <div className="data">
                    <p>Your age: {this.props.age}</p>
                    <input
                        style={inputStyle}
                        type='text'
                        value={this.props.name}
                        onChange={this.props.change}/>
                </div>}
            </div>);
    }
}

export default Radium(Person);
