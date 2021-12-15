import React, { useState } from 'react';
import { PrimaryButton, PrimarySelect, Tabpane } from '../../../reusables';
import { PREMIUM_CHARTER_DATA } from './constants';
import { airCraftType } from '../AirCharter/constants';

const PremiumCharter = () => {
    const [filter, setFilter] = useState('air');

    const selectedFilter = PREMIUM_CHARTER_DATA.filter(
        (item) => item.type.toLowerCase() === filter,
    );

    const onChange = (value: string) => {
        setFilter(value.toLowerCase());
    };

    return (
        <article className="premium jumbotron">
            <div className="center">
                <h3 className="title">All Premium Charters</h3>
                <Tabpane onChange={onChange} list={['Air', 'Sea', 'Land']} />
                <PrimarySelect
                    name="airCraftType"
                    label="Air craft type"
                    options={airCraftType}
                    className="filter__select"
                    fullWidth={false}
                />

                <div className="primary__card--container">
                    {selectedFilter.map((item, index) => (
                        <div key={index} className="primary__card--item">
                            <div className="card__image">
                                <img src={item.image} alt="card__image" />
                            </div>
                            <div className="card__content">
                                <div className="card__title">
                                    <h5>{item.name}</h5>
                                    <h5>
                                        {' '}
                                        PRICE/HOUR <span>{item.price}</span>
                                    </h5>
                                </div>
                                <div className="summary">
                                    <p>Seats: {item.seats}</p>
                                    <p>Speed: {item.speed} kts</p>
                                    <p>Range: {item.range} nm</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cta flex justify-center">
                    <PrimaryButton label="See All Charter" noRounded />
                </div>
            </div>
        </article>
    );
};

export default PremiumCharter;
