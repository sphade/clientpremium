import React from 'react';
import Slider from 'react-slick';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';
import { useCheckCharterType } from '../../../hooks';

const settings = {
    infinite: true,
    className: 'outside-slick',
    speed: 500,
    
     responsive: [
        {
          breakpoint: 2024,
          settings: {
         slidesToShow: 3,
         infinite: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow:2,
            className: 'custom-slick',
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: 'custom-slick',
            slidesToShow: 1,
            dots: true,
          }
        }
      ],

    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
};

const FeaturedItems = () => {
    const { charterData,  text  } = useCheckCharterType();

    return (
        <div className="featured-item">
            <div className="featured-item__slider center">
                <h3>FEATURED {text.toUpperCase()}</h3>
                <Slider {...settings}>
                    {charterData.map(({ name, image}, index) => (
                        <div className="featured-item__slider--card" key={index}>
                            <img src={image} alt="plane" />
                            <div className="slider-card-content">
                                <h5>{name}</h5>
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
