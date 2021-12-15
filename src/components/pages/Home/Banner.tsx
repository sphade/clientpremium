import React, { Fragment } from 'react';
import { ArrowButton, PrimaryButton } from '../../../reusables';
import PlaneBanner from '../../../assets/images/hero.jpg';
import SeaBanner from '../../../assets/images/sea-banner.jpg';
import LandBanner from '../../../assets/images/land-banner.jpg';

type BannerType = {
    images?: string[],
    headers?: string[],
    subtitle?: string,

}



const Banner = ({ images = [LandBanner, SeaBanner, PlaneBanner], headers = ['EXPERIENCE PREMIUM', 'LUXURY ON THE GO'], subtitle = 'Enjoy the comfort and pleasure of executive VVIP service, 24/7 travel support.' }:BannerType) :JSX.Element => {
    return (
        <div className="banner__image">
            <div className="banner__image--container">
                {
                    images.map((image, id) => (
                        <Fragment key={id}>

                            <img className={`image-${id}`} src={image} />
                        </Fragment>
                    ))
                }
            </div>
            <div className="center content">
                <h3>
                    {
                        headers.map(header => (
                            <Fragment key={header}>
                                <span>{header}</span>
                            </Fragment>
                        ))
                    }
                </h3>
                <p>
                   {subtitle}
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
