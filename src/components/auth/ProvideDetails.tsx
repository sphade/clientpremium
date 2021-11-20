import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';

import { Divider, LinkButton, OutlineButton, PrimaryButton, PrimaryInput } from '../../reusables';
import { ReactComponent as EyeIcon } from './../../assets/svgs/eye.svg';
import { AUTHENTICATED_ROUTES } from '../../routes/path';
import { useFormik } from 'formik';
import { provideDetailsValidation } from '../../validations';
import useGlobalStoreProvider from '../../context';
import { SignupReducerType } from '../../context/reducers/userReducer';
import { signUserUp } from '../../routes/api';
import useCustomSnackbar from '../../hooks/useSnackbar';

const ProvideDetails = () => {
    const history = useHistory();
    const queryClient = useQueryClient();
    const [acceptTerms, setAcceptTerms] = React.useState(false);
    const toggleTerms = () => setAcceptTerms(!acceptTerms);
    const { dispatch } = useGlobalStoreProvider();
    const { STORE_SIGNUP_DETAILS } = SignupReducerType;
    const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

    const { mutate } = useMutation(signUserUp, {
        onSuccess: (data) => {
            console.log(data);
            succesSnackbar(data.message || 'check email and phone for verification otp');
            history.push(AUTHENTICATED_ROUTES.signupotp);
        },
        onError: () => {
            errorSnackbar('Error');
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        },
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            name: '',
            password: '',
            confirmPassword: '',
            acceptTerms: '',
        },
        onSubmit: async (values) => {
            if (!acceptTerms) return;
            dispatch({ type: STORE_SIGNUP_DETAILS, payload: values });
            const data = {
                email: values.email,
                phone: `+234${values.phoneNumber}`,
            };
            mutate(data);
        },
        validationSchema: provideDetailsValidation,
    });

    const { handleSubmit } = formik;

    return (
        <div className="signin signup">
            <h3 className="signin__title">CREATE ACCOUNT FOR FASTER ACCESS</h3>
            <form className="signin__form" onSubmit={handleSubmit}>
                <div className="info">
                    <p>
                        {`Register your details securely to speed up future bookings and customize
                        your experience. Bossbus's team of experts are available 24/7/365, and can
                        provide quotes for all your business aviation needs`}
                    </p>
                </div>
                <PrimaryInput formik={formik} placeholder="Name" name="name" label="Name" />
                <PrimaryInput
                    formik={formik}
                    placeholder="Email Address"
                    name="email"
                    label="Email Address"
                />
                <PrimaryInput
                    formik={formik}
                    placeholder="Phone Number"
                    name="phoneNumber"
                    label="Phone Number"
                />
                <PrimaryInput
                    formik={formik}
                    placeholder="Password"
                    label="Password"
                    name="password"
                    type="password"
                    icon={<EyeIcon />}
                />
                <PrimaryInput
                    formik={formik}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    icon={<EyeIcon />}
                />
                <div className="terms__condition">
                    <input
                        type="checkbox"
                        checked={acceptTerms}
                        name="acceptTerms"
                        onChange={toggleTerms}
                    />
                    <p>
                        By creating a Bossbus Premium Account, I understand and agree to Bossbus’s
                        Privacy Notice and Terms of Use
                    </p>
                </div>

                <PrimaryButton fullWidth label="Create Account" onClick={handleSubmit} />
                <Divider text="OR" classes="" />
                <Link to={AUTHENTICATED_ROUTES.signin}>
                    <OutlineButton fullWidth label="Sign In" />
                </Link>
                <div className="text-center">
                    <LinkButton label="Skip for now?" />
                </div>
            </form>
        </div>
    );
};

export default ProvideDetails;
