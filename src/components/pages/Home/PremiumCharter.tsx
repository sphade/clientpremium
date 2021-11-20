import React from 'react';
import { PrimaryButton } from '../../../reusables';
import Plane from '../../../assets/images/plane.jpg';

const PremiumCharter = () => {
    return (
        <article className="premium jumbotron">
            <div className="center">
                <h3 className="title">All Premium Charters</h3>
                <div className="tab__pane">
                    <button className="tab__pane--item active">Air</button>
                    <button className="tab__pane--item active">Sea</button>
                    <button className="tab__pane--item active">Land</button>
                </div>
                <div className="primary__card--container">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="primary__card--item">
                            <div className="card__image">
                                <img src={Plane} alt="card__image" />
                            </div>
                            <div className="card__content">
                                <div className="card__title">
                                    <h5>Comodore 101</h5>
                                    <h5>
                                        {' '}
                                        PRICE/HOUR <span>168,000</span>
                                    </h5>
                                </div>
                                <div className="summary">
                                    <p>Seats: 12</p>
                                    <p>Speed: 427 kts</p>
                                    <p>Range: 1390 nm</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta">
                    <PrimaryButton label="See All Charter" noRounded />
                </div>
            </div>
        </article>
    );
};

export default PremiumCharter;
