import React, { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

import { LinkButton, PrimaryButton } from '../../reusables';
import { useCountdown } from '../../hooks';
import { useHistory } from 'react-router';
import { AUTHENTICATED_ROUTES } from '../../routes/path';
import { useMutation, useQueryClient } from 'react-query';
import useCustomSnackbar from '../../hooks/useSnackbar';
import { createUser, resendVerifyOtp } from '../../routes/api';
import useGlobalStoreProvider from '../../context';

const SignupOtp = () => {
    //App History
    const history = useHistory();

    //Handle countdownt imer
    const {
        minutesLeft,
        secondsLeft,
        start: startOtpCountdown,
        reset,
        isOver,
        isRunning,
    } = useCountdown({ minutes: 2 });

    //Snackbar
    const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

    //React query
    const queryClient = useQueryClient();

    //Global Store
    const { state } = useGlobalStoreProvider();

    //handle Otp
    const [otp, setOtp] = useState('');

    //Create User
    const { mutate } = useMutation(createUser, {
        onSuccess: (data) => {
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

    //Start countdown on page load
    useEffect(() => {
        startOtpCountdown();
    }, []);

    //Resend otp
    const { mutate: resendOtp, isLoading: resendOtpLoading } = useMutation(resendVerifyOtp, {
        onSuccess: (data) => {
            succesSnackbar(data.message || 'Check email and phone for verification otp');
            reset();
            startOtpCountdown();
        },
        onError: () => {
            errorSnackbar('Error');
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        },
    });

    //HandleResend otp
    const handleResendOtp = () => {
        const { email, phoneNumber: phone } = state.signupInfo;

        const data = {
            email,
            phone: `+${phone}`,
        };
        resendOtp(data);
    };

    const handleSubmit = (value: string) => {
        const { email, name, password, phoneNumber: phone } = state.signupInfo;
        const data = {
            email,
            password,
            name,
            otp: value,
            phone: `+${phone}`,
        };
        mutate(data);
    };

    return (
        <div className="signup__otp">
            <h3>PHONE NUMBER VERIFICATION</h3>
            <p className="phone__number">
                Enter the 6 digit verification code sent to:
                <span>+{state.signupInfo?.phoneNumber}</span>
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
                <span>
                    {!isOver ? (
                        `Resend code in ${minutesLeft}:${secondsLeft}`
                    ) : (
                        <span>You can now resend otp</span>
                    )}
                </span>{' '}
            </p>
            <PrimaryButton
                onClick={handleResendOtp}
                label="Resend Code"
                disabled={isRunning}
                isLoading={resendOtpLoading}
            />
            <LinkButton label="Didn’t get the code? Use email" />
        </div>
    );
};

export default SignupOtp;
