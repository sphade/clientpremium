import React from 'react';
import { ReactComponent as ArrowIcon } from './../../assets/svgs/caret-down.svg';

const ArrowButton = () => {
    return (
        <button className="arrow__icon">
            <ArrowIcon />
        </button>
    );
};

export default ArrowButton;
