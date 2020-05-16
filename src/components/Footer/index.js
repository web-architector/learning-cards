import React from 'react';
import ReactLogo from "../ReactLogo";
import './Footer.modal.scss';

const Footer = (props) => {
    return (
        <footer>
            <ReactLogo rotate/>
            <span>&#9990;Ученье свет, а неученье тьма</span>
        </footer>
    );
};

export default Footer;