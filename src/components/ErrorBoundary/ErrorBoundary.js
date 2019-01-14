import React, {Component} from 'react';
import classes from './ErrorBoundary.css';

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
                <div className={classes.ErrorBoundary}>
                    <h1>{this.state.error && this.state.error.toString()}</h1>
                    <details>
                        <p>{this.state.errorInfo.componentStack}</p>
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
