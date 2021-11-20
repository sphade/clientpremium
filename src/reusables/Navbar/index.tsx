import React from 'react';
import FullLogo from './../../assets/svgs/full-logo.svg';
import ShortLogo from './../../assets/svgs/logo.svg';

const Navbar = (): JSX.Element => {
    return (
        <div className="navbar">
            <div className="center .navbar">
                <div className="navbar__brand">
                    <img className="desktop__logo" src={FullLogo} alt="logo" />
                    <img className="mobile__logo" src={ShortLogo} alt="logo" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
