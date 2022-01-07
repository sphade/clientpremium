import React from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import PlaneImage4 from './../../../assets/images/plane-4.png';
import PlaneImage2 from './../../../assets/images/plane-2.png';
import PlaneImage3 from './../../../assets/images/plane-3.png';
import car1 from './../../../assets/images/car-1.png';
import car2 from './../../../assets/images/car-2.png';
import car3 from './../../../assets/images/car-3.png';
import Boat from '../../../assets/images/sea-charter.png'

import { ReactComponent as ArrowLeft } from '../../../assets/svgs/outline-arrow-left.svg';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';

import { PrimaryButton } from '../../../reusables';
import { detailBannerSummary } from './constants';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../routes/path';
import { useCheckCharterType } from '../../../hooks';



 const settings = {
    //   className: "center",
      infinite: true,
      className: 'custom-slick',
      speed: 500,
      centerPadding: '28%',
      
      slidesToShow: 1,

       responsive: [
        {
          breakpoint: 2024,
          settings: {
          centerMode: true,
            slidesToShow: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: true,
          }
        }
      ],

      nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,

       

    };


    

const DetailBanner = () => {
    const { isLand, isSea,charterData  } = useCheckCharterType();



    const history = useHistory();
    const firstData = charterData[0]

    return (
        <article className="detail-banner">
            <div className="center detail-banner__header">
                <div onClick={() => history.goBack()}>
                    <ArrowLeft />
                    <h3>{firstData.name}</h3>
                </div>
                <Link to={APP_ROUTES.bookingSummary}>
                    <PrimaryButton label={`Charter ${isLand ? 'Car' : isSea ? 'Boat' :  'Flight'}`} />
                </Link>
            </div>
            <div className="detail-banner__hero">
                <div className="detail-banner__hero--images">
                    <Slider {...settings}>
                        <div className="center-slider">
                            <img src={isLand ? car1 : isSea ?  Boat : PlaneImage4} alt="plane" />
                        </div>
                        <div className="center-slider">
                            <img src={isLand ? car2 : isSea ?  Boat : PlaneImage2} alt="plane" />
                        </div>
                        <div className="center-slider">
                            <img src={isLand ? car3 : isSea ?  Boat : PlaneImage3} alt="plane" />
                        </div>
                        <div className="center-slider">
                            <img src={isLand ? car1 :isSea ?  Boat :  PlaneImage3} alt="plane" />
                        </div>
                    </Slider>
                </div>
                <div className="detail-banner__hero--titles center">
                    {detailBannerSummary(isLand).map((item, id) => (
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
