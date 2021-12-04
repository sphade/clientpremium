import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { OutlineButton, PrimaryButton } from '../../../reusables';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';
import { APP_ROUTES } from '../../../routes/path';
import { useCheckCharterType } from '../../../hooks';

const settings = {
    infinite: true,
    speed: 500,
    className: 'custom-slick',
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
};

const AvailablePrivateJets = () => {
    const { isLand, charterData, charterType } = useCheckCharterType();

    return (
        <div className="private-jets">
            <h3 className="private-jets__title">AVAILABLE {isLand ? 'CARS' : 'PRIVATE JETS'} </h3>

            {charterData.map((item, index) => (
                <div key={index} className="charter-card">
                    <div className="charter-card__content">
                        <div className="charter-card__content--title">
                            <h4>SKY NIGHT 6000</h4>
                            <h4>N185,000/Hour</h4>
                        </div>
                        <div className="charter-card__content--stats">
                            <p>
                                <span className="bold">Range:</span> 6000 - 6999 nm
                            </p>
                            <p>
                                <span className="bold">Speed:</span> 600 kts
                            </p>
                            <p>
                                <span className="bold">Passengers: </span> 16
                            </p>
                            <p>
                                <span className="bold">Year:</span> 2017
                            </p>
                        </div>
                        <div className="button-group">
                            <Link to={APP_ROUTES.bookingSummary}>
                                <PrimaryButton
                                    label={`Charter ${isLand ? 'Car' : 'Flight'}`}
                                    small
                                />
                            </Link>
                            <Link to={APP_ROUTES.charterDetailPage(charterType.toLowerCase(), '2')}>
                                <OutlineButton label={`${isLand ? 'Car' : 'Jet'} Details`} small />
                            </Link>
                        </div>
                    </div>
                    <div className="charter-card__image">
                        <Slider {...settings}>
                            <img src={item.image} alt="plane" />
                            <img src={item.image} alt="plane" />
                            <img src={item.image} alt="plane" />
                        </Slider>
                    </div>
                </div>
            ))}

            <div className="private-jets__footer">
                <p className="private-jets__footer--sumary">Showing 4 from 12 Jets</p>
                <div className="private-jets__footer--buttons">
                    <button>
                        <span>{'<<'}</span>
                        <span>Previous</span>
                    </button>

                    <div className="paginations">
                        <h3 className="active">1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                    </div>
                    <button>
                        <span>Next</span>
                        <span>{'>>'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AvailablePrivateJets;
