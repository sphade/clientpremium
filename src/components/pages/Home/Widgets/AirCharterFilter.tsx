import React from 'react';
import { CustomCounter, DatePicker, PrimaryInput, PrimarySelect } from '../../../../reusables';
import { airCraftType, tripType } from '../../AirCharter/constants';

import { ReactComponent as NavigatorIcon } from './../../../../assets/svgs/navigator.svg';
import { ReactComponent as LocationIcon } from './../../../../assets/svgs/location-outlined.svg';

const AirCharterFilter = () => {
   
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
              <CustomCounter 
              text="Passenger"
              />
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
