import React, { useState } from 'react';
import { CustomTimePicker, DatePicker, PrimaryInput, PrimarySelect } from '../../../../reusables';
import { seaTripType } from '../../AirCharter/constants';

import { ReactComponent as NavigatorIcon } from './../../../../assets/svgs/navigator.svg';
import { ReactComponent as DecrementIcon } from './../../../../assets/svgs/decrement.svg';
import { ReactComponent as IncrementIcon } from './../../../../assets/svgs/increment.svg';
import { ReactComponent as LocationIcon } from './../../../../assets/svgs/location-outlined.svg';

import { BOAT_TYPE, DESTINATION } from '../constants';

const SeaCharterFilter = () => {
    const [guestCount, setguestCount] = useState(1);

    const increment = () => setguestCount(guestCount + 1);
    const decrement = () => {
        if (guestCount < 2) {
            return;
        }
        setguestCount(guestCount - 1);
    };
    return (
        <>
            <div className="charter__content--select">
                <div>
                    <PrimarySelect
                        name="seaTripType"
                        label="Trip type"
                        fullWidth={false}
                        options={seaTripType}
                    />
                    <PrimarySelect
                        name="boatType"
                        label="Boat type"
                        fullWidth={false}
                        options={BOAT_TYPE}
                    />
                </div>
                <div>
                    <DecrementIcon onClick={decrement} />
                    <p>
                        {guestCount} {guestCount > 1 ? 'Guest (s)' : 'Guest'}
                    </p>
                    <IncrementIcon onClick={increment} />
                </div>
            </div>
            <div className="charter__content--form">
                <PrimaryInput name="Leaving" label="Leaving From" icon={<NavigatorIcon />} />
                <PrimarySelect
                    name="destination"
                    label="Select Destination"
                    icon={<LocationIcon />}
                    options={DESTINATION}
                />
            </div>
            <div className="charter__content--form">
                <DatePicker label="Depature Date" />
                <CustomTimePicker label="Depature time" />
            </div>
        </>
    );
};

export default SeaCharterFilter;
