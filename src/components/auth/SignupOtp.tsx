import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import { LinkButton, PrimaryButton } from '../../reusables';
import { useCountdown } from '../../hooks';
import { useHistory } from 'react-router';
import { AUTHENTICATED_ROUTES } from '../../routes/path';
import { useMutation, useQueryClient } from 'react-query';
import useCustomSnackbar from '../../hooks/useSnackbar';
import { createUser } from '../../routes/api';
import useGlobalStoreProvider from '../../context';

const SignupOtp = () => {
    const history = useHistory();
    const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
    const queryClient = useQueryClient();
    const { state } = useGlobalStoreProvider();

    const [otp, setOtp] = useState('');

    const { mutate } = useMutation(createUser, {
        onSuccess: (data) => {
            console.log(data);
            succesSnackbar(data.message || 'User Successfully registered');
            history.push(AUTHENTICATED_ROUTES.signupsucces);
        },
        onError: () => {
            errorSnackbar('Error');
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        },
    });

    const {
        minutesLeft,
        secondsLeft,
        start: startOtpCountdown,
        reset: resetOtpCountdown,
        isOver,
    } = useCountdown({ minutes: 2 });

    useEffect(() => {
        startOtpCountdown();
    }, []);

    const handleSubmit = (value: string) => {
        const { email, name, password, phoneNumber: phone } = state.user;
        const data = {
            email,
            password,
            name,
            otp: value,
            phone: `+234${phone}`,
        };
        mutate(data);
    };

    return (
        <div className="signup__otp">
            <h3>PHONE NUMBER VERIFICATION</h3>
            <p className="phone__number">
                Enter the 6 digit verification code sent to:
                <span>+234 8012345678</span>
            </p>
            <div className="otp__box">
                <OtpInput
                    value={otp}
                    inputStyle="otp__input"
                    onChange={(value: string) => {
                        setOtp(value);
                        if (value.length === 6) {
                            handleSubmit(value);
                        }
                    }}
                    numInputs={6}
                    isInputNum
                    separator={<span></span>}
                />
            </div>
            <p className="resend__code">
                Resend code in{' '}
                <span>
                    {!isOver ? (
                        `${minutesLeft}:${secondsLeft}`
                    ) : (
                        <span onClick={resetOtpCountdown}>Resend Otp</span>
                    )}
                </span>{' '}
            </p>
            <PrimaryButton
                label="Resend Code"
                // onClick={() => {
                //     handleSubmit();
                // }}
            />
            <LinkButton label="Didn’t get the code? Use email" />
        </div>
    );
};

export default SignupOtp;
