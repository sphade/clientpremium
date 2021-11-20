import React from 'react';
import ShortLogo from './../../assets/svgs/logo.svg';

const Preloader: React.FC = () => {
    return (
        <div className="preloader">
            <img alt="iconLogo" src={ShortLogo} />
        </div>
    );
};

export default Preloader;
