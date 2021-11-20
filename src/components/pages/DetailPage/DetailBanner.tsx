import React from 'react';
import Slider from 'react-slick';
import PlaneImage4 from './../../../assets/images/plane-4.png';
import PlaneImage2 from './../../../assets/images/plane-2.png';
import PlaneImage3 from './../../../assets/images/plane-3.png';
import { ReactComponent as ArrowLeft } from '../../../assets/svgs/outline-arrow-left.svg';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';

import { PrimaryButton } from '../../../reusables';
import { detailBannerSummary } from './constants';

const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    className: 'custom-slick',
    centerMode: true,
    centerPadding: '20%',
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
};

const DetailBanner = () => {
    return (
        <article className="detail-banner">
            <div className="center detail-banner__header">
                <div>
                    <ArrowLeft />
                    <h3>SKY NIGHT 6000</h3>
                </div>
                <PrimaryButton label="Charter Flight" />
            </div>
            <div className="detail-banner__hero">
                <div className="detail-banner__hero--images">
                    <Slider {...settings}>
                        <div className="center-slider">
                            <img src={PlaneImage4} alt="plane" />
                        </div>
                        <div className="center-slider">
                            <img src={PlaneImage2} alt="plane" />
                        </div>
                        <div className="center-slider">
                            <img src={PlaneImage3} alt="plane" />
                        </div>
                        <div className="center-slider">
                            <img src={PlaneImage3} alt="plane" />
                        </div>
                    </Slider>
                </div>
                <div className="detail-banner__hero--titles center">
                    {detailBannerSummary.map((item, id) => (
                        <div className="single-title" key={id}>
                            <p>{item.title}</p>
                            <h3>{item.value}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default DetailBanner;
