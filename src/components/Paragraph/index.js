import React from 'react';
import s from './Paragraph.module.scss';

const Paragraph = ({children, white}) => {

    console.log('Paragraph children=', children);
    const className=[s.paragraph];

    if (white) {
        className.push(s.whiteColor)
    }

    return <p className={className.join(' ')}>{children}</p>;
};

export default Paragraph;