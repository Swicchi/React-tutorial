import React, {Component} from 'react';
import classes from './ErrorBoundary.css';
import WithClass from '../../hoc/WithClass';


class ErrorBoundary extends Component {
    state = {
        errorInfo: null,
        error: null
    };

    componentDidCatch = (error, errorInfo) => {
        this.setState({errorInfo: errorInfo, error: error});
    };

    render() {
        if (this.state.errorInfo) {
            return (
                <WithClass classes={classes.ErrorBoundary}>
                    <h1>{this.state.error && this.state.error.toString()}</h1>
                    <details>
                        <p>{this.state.errorInfo.componentStack}</p>
                    </details>
                </WithClass>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
