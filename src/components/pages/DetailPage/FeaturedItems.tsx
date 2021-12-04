import React from 'react';
import Slider from 'react-slick';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';
import { useCheckCharterType } from '../../../hooks';

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
    const { charterData } = useCheckCharterType();

    return (
        <div className="featured-item">
            <div className="featured-item__slider center">
                <h3>FEATURED JETS</h3>
                <Slider {...settings}>
                    {charterData.map((item, index) => (
                        <div className="featured-item__slider--card" key={index}>
                            <img src={item.image} alt="plane" />
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
