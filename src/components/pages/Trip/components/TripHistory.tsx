import React from 'react'
import { Link } from 'react-router-dom';
import {  PrimaryButton } from '../../../../reusables';

import { ReactComponent as EmptyWallet} from '../../../../assets/svgs/wallet-empty.svg'
import { APP_ROUTES } from '../../../../routes/path';


const TripHistory = () => {
    return (
        <div className="wallet__body--content">
                                <div className="empty">

                                <EmptyWallet />
                                <div>

                                <h3 className="h3 light">
                                    You currently have no pending trips
                                </h3>
                                <p className="ash-color">When you book a trip, it will appear here.</p>
                                </div>
                                <Link to={APP_ROUTES.carAddedSuccess}>
                                    <PrimaryButton label="book trip" />
                                </Link>
                                </div>
                            </div>
    )
}

export default TripHistory
