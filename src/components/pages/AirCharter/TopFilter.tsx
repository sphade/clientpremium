import React from 'react';
import { PrimaryInput, DatePicker, PrimarySelect, CustomTimePicker } from '../../../reusables';
import { ReactComponent as NavigatorIcon } from './../../../assets/svgs/navigator.svg';
import { ReactComponent as LocationIcon } from './../../../assets/svgs/location-outlined.svg';
import { airCraftType, tripType } from './constants';
import StylishArrow from '../../../assets/images/arrow-style.png';
import { useCheckCharterType } from '../../../hooks';
import { CharterType } from '../../../hooks/types';

const TopFilter = () => {
    const charterType = useCheckCharterType();

    return (
        <div className="top-filter">
            <div className="top-filter__banner">
                <div className="center">
                    <h3>{charterType} CHARTER</h3>
                    <img src={StylishArrow} alt="stylish-arrow" />
                </div>
            </div>
            <div className=" center">
                <div className="top-filter__content">
                    <PrimaryInput name="Leaving" label="Leaving from" icon={<NavigatorIcon />} />
                    <PrimaryInput name="Leaving" label="Going to" icon={<LocationIcon />} />
                    {charterType !== CharterType.LAND ? (
                        <>
                            <DatePicker label="Departing" />
                            <DatePicker label="Returning" />
                        </>
                    ) : (
                        <>
                            <CustomTimePicker label="Pick-up time" />
                            <CustomTimePicker label="Duration" />
                        </>
                    )}
                </div>
                <div className="top-filter__content">
                    {charterType !== CharterType.LAND ? (
                        <div>
                            <PrimarySelect
                                name="airCraftType"
                                label="Air craft type"
                                options={airCraftType}
                            />
                            <PrimarySelect name="tripType" label="Trip Type" options={tripType} />
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default TopFilter;
