import React, { useState } from 'react';
import { PrimaryButton, CustomAlert, Tabpane } from '../../../reusables';
import AirCharterFilter from './Widgets/AirCharterFilter';
import LandCharterFilter from './Widgets/LandCharterFilter';
import SeaCharterFilter from './Widgets/SeaCharterFilter';

const Charter = () => {
    const [currentCharter, setCurrentCharter] = useState('Air Charter');

    const onTabChange = (value: string) => {
        setCurrentCharter(value);
    };

    return (
        <div className="charter">
            <div className="center">
                <CustomAlert
                    hasIcon
                    header="Trip Charter Time"
                    content=" All charter activities should be made at least 24 hours before pick up
                    time."
                />

                <div className="charter__content">
                    <h3 className="charter__content--header">Find Charters</h3>
                    <Tabpane
                        onChange={onTabChange}
                        list={['Air Charter', 'Sea Charter', 'Land Charter']}
                    />
                    <div>
                        {currentCharter === 'Air Charter' && <AirCharterFilter />}
                        {currentCharter === 'Land Charter' && <LandCharterFilter />}
                        {currentCharter === 'Sea Charter' && <SeaCharterFilter />}
                    </div>

                    <PrimaryButton label="search" disabled />
                </div>
            </div>
        </div>
    );
};

export default Charter;
