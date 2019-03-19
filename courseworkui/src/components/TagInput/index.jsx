import React, { Component } from 'react';
//eslint-disable-next-line
import styles from './styles.css';
import TagContainer from '../TagContainer';
import SimpleInput from '../SimpleInput';

const SpaceBarASCIICode = 32;

class TagInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            tagArray: []
        };
    }

    onSimpleInputChange = (inputText) => {
        let lastTypedCharacter = inputText.charAt(inputText.length - 1);
        let asciiOfLastCharacter = lastTypedCharacter.charCodeAt(0);
        if (asciiOfLastCharacter === SpaceBarASCIICode) {
            let tagArrayCopy = this.state.tagArray;
            const newTagValue = inputText.trim();

            this.setState({ inputValue: '' });

            if (tagArrayCopy.indexOf(newTagValue) > -1) {
                return;
            } else {
                this.state.tagArray.push(newTagValue);
            }
        } else {
            this.setState({ inputValue: inputText.trim() })
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