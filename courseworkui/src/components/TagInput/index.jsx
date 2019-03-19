import React, { Component } from 'react';
//eslint-disable-next-line
import styles from './styles.css';
import TagContainer from '../TagContainer';
import SimpleInput from '../SimpleInput';


class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            tagArray: []
        };
    }

    onSimpleInputChange = (input) => {
        let lastTypeCharacter = input.charAt(input.length - 1);
        let asciiOfLastCharacter = lastTypeCharacter.charCodeAt(0);
        if (asciiOfLastCharacter === 32) {
            const newTagValue = input.substring(0, input.length - 1);
            this.state.tagArray.push(newTagValue);
            this.setState({ inputValue: ' ' });
        } else {
            this.setState({ inputValue: input.trim() })
        }
    }

    onRemoveTag = (tagValue) => {
        let tagArrayCopy = this.state.tagArray.filter(e => e !== tagValue);
        this.setState({
            tagArray: tagArrayCopy
        })
    }

    render() {
        return (
            <div className="pop-infront">
                <div className="tags-input" data-name="tags-input">
                    <TagContainer tagArray={this.state.tagArray} onRemoveTag={this.onRemoveTag} />
                    <SimpleInput inputValue={this.state.inputValue} onSimpleInputChange={this.onSimpleInputChange} />
                </div>
            </div>
        );
    };
}
export default TagInput;