import React from "react";
import s from './Section.module.scss';

const Section = ({backgroundColor='white', className='', children}) => {

        const styleCover = {backgroundColor: backgroundColor};
        const defaultClassName = [s.cover];
        defaultClassName.push(className)
    return (
        <div className={defaultClassName.join(' ')} style={ styleCover }>
            <div className={ s.wrap }>
                { children }
            </div>
        </div>

    )
};

export default Section;