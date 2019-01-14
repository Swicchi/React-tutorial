import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        errorInfo: null,
        error: null
    };

    componentDidCatch = (error, errorInfo) => {
        this.setState({errorInfo: errorInfo, error: error});
    };

    render() {
        const style = {
            display: 'flex',
            margin: '10px',
            boxShadow: '0 2px 2px #ccc',
            padding: '30px',
            color: 'blue',
            background: '#eef',
            flexDirection: 'column',
            borderRadius: '5%',
            border: '1px solid blue',
            width: '450px',
            animation: 'normal',
            cursor: 'pointer',
            font: 'inherit',
            overflow: 'hidden',
            wordWrap: 'break-spaces',
            textOverflow: 'ellipsis'
        };
        if (this.state.errorInfo) {
            return (
                <div style={style}>
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
