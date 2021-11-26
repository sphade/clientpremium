import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Link } from 'react-router-dom';

import { PrimaryButton } from '../../../reusables';
import { APP_ROUTES } from '../../../routes/path';

import PaystackLogo from '../../../assets/images/paystack.png';
import FlutterwaveLogo from '../../../assets/images/flutterwave.png';
import WalletLogo from '../../../assets/images/wallet.png';

const paymentMethods = [
    {
        logo: PaystackLogo,
        name: 'Paystack',
    },
    {
        logo: FlutterwaveLogo,
        name: 'Flutterwave',
    },
    {
        logo: WalletLogo,
        name: 'Wallet',
    },
];

const PaymentMethod = () => {
    return (
        <article className="payment-method">
            <div className="payment-method__container">
                <div className="payment-method__container--card">
                    <div className="card__title">
                        <h3>PAYMENT METHOD</h3>
                        <p>Salect a payment method below</p>
                    </div>
                    <div className="card__options">
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label={'title'}
                                defaultValue={paymentMethods[0].name}
                                name="radio-buttons-group"
                            >
                                {paymentMethods.map((payment, id) => (
                                    <FormControlLabel
                                        key={id}
                                        className="form-radio"
                                        value={payment.name}
                                        control={<Radio />}
                                        label={
                                            <div>
                                                <img src={payment.logo} alt="logo" />
                                                <h5>{payment.name}</h5>
                                            </div>
                                        }
                                        labelPlacement="start"
                                    />
                                ))}
                            </RadioGroup>
                        </FormControl>
                        <Link to={APP_ROUTES.bookedPage}>
                            <PrimaryButton label="MAKE PAYMENT" fullWidth />
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default PaymentMethod;
