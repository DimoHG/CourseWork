import React, { Component } from 'react';
//eslint-disable-next-line
import styles from './styles.css';


class TagContainer extends Component {

    updateParent = (evt) =>{
        this.props.onRemoveTag(evt.target.parentNode.innerText);
    }

    render() {
        return (
            <>
                {this.props.tagArray.map(singleTag =>
                    <span key={singleTag} className="tag">{singleTag}<span className="close" onClick={evt => this.updateParent(evt)}></span></span>
                )}
            </>
        );
    };
}
export default TagContainer;