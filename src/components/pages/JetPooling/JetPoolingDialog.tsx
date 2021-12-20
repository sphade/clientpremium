import React from 'react';

import PlaneImage4 from './../../../assets/images/plane-4.png';
import PlaneImage2 from './../../../assets/images/plane-2.png';
import PlaneImage3 from './../../../assets/images/plane-3.png';

import { CustomAlert, CustomCounter, CustomDivider, PrimaryButton,  } from '../../../reusables';
import BaseModal from '../../../reusables/BaseModal';
import { ReactComponent as ArrowRight } from '../../../assets/svgs/arrow-right-secondary.svg';
import { Divider } from '@mui/material';
import Slider from 'react-slick';
import { singleSettings } from '../AirCharter/AvailablePrivateJets';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../routes/path';




const JetPoolingDialog = ({
    open,
    handleClose,
}: {
    open: boolean;
    handleClose: () => void;
}) => {
    return (
        <BaseModal maxWidth="sm" open={open} onClose={handleClose}>
            <div className="trip__dialog">
                <div className="trip__dialog--image">
                    <Slider {...singleSettings}>
                            <img src={PlaneImage3} alt="plane" />
                            <img src={PlaneImage4} alt="plane" />
                            <img src={PlaneImage2} alt="plane" />
                        </Slider>
                </div>
               <div className="trip__details">
                   <div>
                        <p>Departure </p>
                        <h3>25 Nov 2021</h3>
                   </div>
                   <div className="trip__details--flight">
                        <div>
                        <p>09:30</p>
                        <h3>Abuja (Nigeria)</h3>
                        <p>Nnamdi Azikiwe Int...</p>
                        </div>
                        <ArrowRight />
                        <div>
                        <p>09:30</p>
                        <h3>Abuja (Nigeria)</h3>
                        <p>Nnamdi Azikiwe Int...</p>
                        </div>
                   </div>
               </div>
               <div className="trip__passengers">
                    <h3>Select number of passengers</h3>
                    <p>5 of 12 seats left</p>
                    <CustomCounter />
               </div>
               <CustomAlert
               header="Notice"
               content={["Prices may end cheaper depending on final number of seats booked,", "This service requires you to have an active Bossbus premium wallet. This is needed to credit additional gains to your wallet. Activate your Wallet."]}
               />
               <div className="trip__pricing">
                   <div>
                        <p>Starting price per seat:</p>
                        <p>N 850,000</p>
                   </div>
                   <Divider />
                   <div>
                       <p>Current price per seat:</p>
                       <h3>N600,000</h3>
                   </div>
                   <Link to={APP_ROUTES.charterDetailPage('air', '2')}>
                    <PrimaryButton label="Join flight" />
                     </Link>
               </div>
                
            </div>
        </BaseModal>
    );
};

export default JetPoolingDialog;
