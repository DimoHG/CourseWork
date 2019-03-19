import React, { Component } from 'react';
//eslint-disable-next-line
import styles from './styles.css';


class SimpleInput extends Component {
    
    updateParent = (evt) => {
        this.props.onSimpleInputChange(evt.target.value);
    }

    render() {
        return (
            <input className="main-input"
                onChange={evt => this.updateParent(evt)}
                value={this.props.inputValue} 
                placeholder="Search..." />
        );
    };
}
export default SimpleInput;