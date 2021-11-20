import React from 'react';
import Slider from 'react-slick';
import PlaneImage from './../../../assets/images/plane.jpg';
import { OutlineButton, PrimaryButton } from '../../../reusables';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/svgs/arrow-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../assets/svgs/arrow-right.svg';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
};

const AvailablePrivateJets = () => {
    return (
        <div className="private-jets">
            <h3 className="private-jets__title">AVAILABLE PRIVATE JETS</h3>

            {[1, 2, 3, 4].map((item) => (
                <div key={item} className="charter-card">
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
                            <PrimaryButton label="Charter Flight" small />
                            <OutlineButton label="Jet Details" small />
                        </div>
                    </div>
                    <div className="charter-card__image">
                        <Slider {...settings}>
                            <img src={PlaneImage} alt="plane" />
                            <img src={PlaneImage} alt="plane" />
                            <img src={PlaneImage} alt="plane" />
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
