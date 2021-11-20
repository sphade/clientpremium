import React from 'react';
import { Dividertype } from './types';

const Divider = ({ text, classes }: Dividertype): JSX.Element => {
    return (
        <div className={`divider ${classes}`}>
            <span className="divider__text">{text}</span>
        </div>
    );
};

export default Divider;
