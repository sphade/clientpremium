import React from 'react';
import { ArrowButton, PrimaryButton } from '../../../reusables';

const Banner = () => {
    return (
        <div className="banner__image">
            <div className="center content">
                <h3>
                    <span>EXPERIENCE PREMIUM</span>
                    <span>LUXURY ON THE GO</span>
                </h3>
                <p>
                    Enjoy the comfort and pleasure of executive VVIP service, 24/7 travel support.
                </p>
                <PrimaryButton label="Learn More" />
                <div className="banner__arrow">
                    <ArrowButton />
                </div>
            </div>
        </div>
    );
};

export default Banner;
