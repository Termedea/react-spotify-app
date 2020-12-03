import React from 'react';
import './Pill.css';

class Pill extends React.Component {
    render() {
        return (
            <div className="rounded-md bg-primary-light p-1 mr-1">
                {this.props.text}
            </div>
        );
    }
}

export default Pill;
