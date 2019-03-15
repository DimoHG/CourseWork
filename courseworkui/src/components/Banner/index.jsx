import React, { Component } from 'react';
import particlesConfig from './particles-config.json';
import Logo from '../Banner/Logo-TU-blue-3D.png'
import SearchInput from '../SearchInput'

//eslint-disable-next-line
import styles from './styles.css';

//eslint-disable-next-line
const particlesJS = typeof window !== 'undefined' ? require('particles.js') : {};

class Banner extends Component {
    componentDidMount() {
        window.particlesJS('particles-js', particlesConfig);
    }
    render() {
        return (
            <div>
                <div id="particles-js" />
                <img src={Logo} className="tu-logo" alt="logo" />
                <SearchInput />
            </div>
        );
    };
}
export default Banner;