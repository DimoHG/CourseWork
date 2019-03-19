import React, { Component } from 'react';
//eslint-disable-next-line
import styles from './styles.css';
import TagContainer from '../TagContainer';
import SimpleInput from '../SimpleInput';


class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Enter your search criteria...',
            tagArray: ['JS', 'HTML']
        };
    }

    onSimpleInputChange = (text) => {
        this.state.inputValue = text;
    }

    render() {
        return (
            <div className="pop-infront">
                <div className="tags-input" data-name="tags-input">
                    <TagContainer tagArray={this.state.tagArray} />
                    <SimpleInput value={this.state.inputValue} onSimpleInputChange={this.onSimpleInputChange} />
                </div>
            </div>
        );
    };
}
export default TagInput;