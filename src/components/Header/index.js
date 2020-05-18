import React from 'react';
import s from './Header.module.scss';

const Header = ({size = 'xl', white, className='', children}) => {
    // return <h1 className={s.header}>{children}</h1>  ;
    let sizePoint;
    switch (size) {
        case 'xl':
            sizePoint = 1;
            break;
        case 'l':
            sizePoint = 2;
            break;
        case 'm':
            sizePoint = 3;
            break;
        case 's':
            sizePoint = 4;
            break;
        case 'xs':
            sizePoint = 5;
            break;
        default:
            sizePoint = 1;
            break;
    }
    const defaultClassName = [s.header];
    defaultClassName.push(className);
    defaultClassName.push(s[`size${size.toUpperCase()}`])
    if (white) {
        defaultClassName.push(s.whiteColor)
    }

    return React.createElement(
        `h${sizePoint}`,
        {
            className: defaultClassName.join(' ')
        },
        children
    );

};

export default Header;
