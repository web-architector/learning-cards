import React from "react";
import s from './HeaderBlock.module.scss';
// import {ReactComponent as ReactLogoSvg} from '../../logo.svg';

const HeaderBlock = (props) => {
    const {backgroundImageUrl = false, backgroundGradient = false, children} = props;
    const {position, begin, end} = backgroundGradient;

    const gradient = backgroundGradient ? `linear-gradient(${ position }, ${ begin }, ${ end })` : '';
    const image = backgroundImageUrl ? `url(${ backgroundImageUrl })` : '';
    const backgroundImage = [gradient, image].filter((item) => {
        return !!item
    }).join(', ');
    const styleCover = {backgroundImage: backgroundImage};
    return (
        <div className={ s.cover } style={ styleCover }>
            <div className={ s.wrap }>
                {/*{title && <h1 className={s.header}>{title}</h1>}*/ }
                {/*{desc && <p className={s.desc}>{desc}</p>}*/ }
                { children }
            </div>
        </div>

    )
};

export default HeaderBlock;