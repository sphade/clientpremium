import React from 'react';
import Slider from 'react-slick';
import PlaneImage from './../../../assets/images/plane.jpg';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';

const settings = {
    infinite: true,
    className: 'outside-slick',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
};

const FeaturedItems = () => {
    return (
        <div className="featured-item">
            <div className="featured-item__slider center">
                <h3>FEATURED JETS</h3>
                <Slider {...settings}>
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div className="featured-item__slider--card" key={item}>
                            <img src={PlaneImage} alt="plane" />
                            <div className="slider-card-content">
                                <h5>Sky Warrior</h5>
                                <p>Rate from N168 per trip.</p>
                                <p>Length: 54m | Buit: 2018 | Guests: 12</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default FeaturedItems;
