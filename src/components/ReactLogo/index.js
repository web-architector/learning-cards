import {ReactComponent as ReactLogoSvg} from "./img/logo.svg";
import React from 'react';
import s from './ReactLogo.module.scss';

const ReactLogo = ({rotate = false}) => {

    const classLogo = rotate ? s.appLogo : ''

    return (
        <div className={ classLogo }>
            <ReactLogoSvg/>
        </div>
    );
};

export default ReactLogo;