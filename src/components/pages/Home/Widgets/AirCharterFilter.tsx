import React, { useState } from 'react';
import { DatePicker, PrimaryInput, PrimarySelect } from '../../../../reusables';
import { airCraftType, tripType } from '../../AirCharter/constants';

import { ReactComponent as NavigatorIcon } from './../../../../assets/svgs/navigator.svg';
import { ReactComponent as LocationIcon } from './../../../../assets/svgs/location-outlined.svg';
import { ReactComponent as DecrementIcon } from './../../../../assets/svgs/decrement.svg';
import { ReactComponent as IncrementIcon } from './../../../../assets/svgs/increment.svg';

const AirCharterFilter = () => {
    const [passengerCount, setPassengerCount] = useState(1);

    const increment = () => setPassengerCount(passengerCount + 1);
    const decrement = () => {
        if (passengerCount < 2) {
            return;
        }
        setPassengerCount(passengerCount - 1);
    };
    return (
        <>
            <div className="charter__content--select air-type">
                <div>
                    <PrimarySelect
                        name="airCraftType"
                        label="Air craft type"
                        fullWidth
                        options={airCraftType}
                    />
                    <PrimarySelect fullWidth name="tripType" label="Trip Type" options={tripType} />
                </div>
                <div>
                    <DecrementIcon onClick={decrement} />
                    <p>
                        {passengerCount} {passengerCount > 1 ? 'Passengers' : 'Passenger'}
                    </p>
                    <IncrementIcon onClick={increment} />
                </div>
            </div>
            <div className="charter__content--form">
                <PrimaryInput name="Leaving" label="Leaving from" icon={<NavigatorIcon />} />
                <PrimaryInput name="Leaving" label="Going to" icon={<LocationIcon />} />
            </div>
            <div className="charter__content--form">
                <DatePicker label="Depature Date" />
                <DatePicker label="Return Date" />
            </div>
        </>
    );
};

export default AirCharterFilter;
