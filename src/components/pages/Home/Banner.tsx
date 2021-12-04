import React from 'react';
import { ArrowButton, PrimaryButton } from '../../../reusables';
import PlaneBanner from '../../../assets/images/hero.jpg';
import SeaBanner from '../../../assets/images/sea-banner.jpg';
import LandBanner from '../../../assets/images/land-banner.jpg';

const Banner = () => {
    return (
        <div className="banner__image">
            <div className="banner__image--container">
                <img className="image-2" src={LandBanner} />
                <img className="image-2" src={SeaBanner} />
                <img className="image-1" src={PlaneBanner} />
            </div>
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
