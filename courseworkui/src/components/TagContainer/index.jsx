import React, { Component } from 'react';
//eslint-disable-next-line
import styles from './styles.css';


class TagContainer extends Component {

    render() {
        console.log(this.props.tagArray)
        return (
            <>
                {this.props.tagArray.map(singleTag => <span key={singleTag} className="tag">{singleTag}<span className="close"></span></span>)}
            </>
        );
    };
}
export default TagContainer;