import React, {  useState, } from 'react';
import {  Tabpane } from '../../../reusables';
import PendingTrips from './components/PendingTrips';
import TripHistory from './components/TripHistory';



const BookingSummarySecondary = () => {

    const [currentTrip, setCurrentTrip] = useState('Pending Trips')

    const onTabChange = (value: string) => {
        setCurrentTrip(value);

    };
   
    return (
        <div className="trip booking-summary ">
            <div className="center">
                <article className="trip__card booking-summary__booking-card">
                    <h3 className="booking-card__title">MY TRIPS</h3>
                    <div className="horizontal-divider"></div>
                    <div className="booking-card__content">
                       <Tabpane
                        onChange={onTabChange}
                        list={['Pending Trips', 'Trip History', ]}
                        />
                   {currentTrip === 'Pending Trips' ? 
                    
                    <PendingTrips />
                    :
                    <TripHistory />
                }
                        
                    </div>

                </article>
            </div>
        </div>
    );
};

export default BookingSummarySecondary;
