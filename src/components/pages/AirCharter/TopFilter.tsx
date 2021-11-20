import React from 'react';
import { PrimaryInput, DatePicker, PrimarySelect } from '../../../reusables';
import { ReactComponent as NavigatorIcon } from './../../../assets/svgs/navigator.svg';
import { ReactComponent as LocationIcon } from './../../../assets/svgs/location-outlined.svg';
import { airCraftType, tripType } from './constants';

const TopFilter = () => {
    return (
        <div className="top-filter">
            <div className=" center">
                <div className="top-filter__content">
                    <PrimaryInput name="Leaving" label="Leaving from" icon={<NavigatorIcon />} />
                    <PrimaryInput name="Leaving" label="Going to" icon={<LocationIcon />} />
                    <DatePicker label="Departing" />
                    <DatePicker label="Returning" />
                </div>
                <div className="top-filter__content">
                    <PrimarySelect
                        name="airCraftType"
                        label="Air craft type"
                        options={airCraftType}
                    />
                    <PrimarySelect name="tripType" label="Trip Type" options={tripType} />
                </div>
            </div>
        </div>
    );
};

export default TopFilter;
