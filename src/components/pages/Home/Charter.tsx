import React from 'react';
import { ReactComponent as AlertIcon } from '.././../../assets/svgs/alert.svg';

const Charter = () => {
    return (
        <div className="charter">
            <div className="center">
                <div className="alert">
                    <AlertIcon />
                    <div className="alert__content">
                        <h3>Trip Charter Time</h3>
                        <p>
                            All charter activities should be made at least 24 hours before pick up
                            time.
                        </p>
                    </div>
                </div>
                <div className="charter__content">
                    <h3>Find Charters</h3>
                </div>
            </div>
        </div>
    );
};

export default Charter;
