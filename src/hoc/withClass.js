import React, {Component} from 'react';

/*
const withClass = (WrappedComponent, className) => {
    const WithClass = (props) => (
        <div className={className}>
            <WrappedComponent ref={props.forwardRef}{...props}/>
        </div>);
    return React.forwardRef((props,ref)=>{
        return <WithClass {...props} forwardedRef={ref}/>
    })
};
*/


const withClass = (WrappedComponent, className) => {
    const WithClass = class extends Component {
        render() {
            return (<div className={className}>
                <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
            </div>);
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref}/>
    })
};

export default withClass;
