/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link, useHistory } from 'react-router-dom';
import { useAppStorage } from '../../hooks';
import useGlobalStoreProvider from '../../context';

import useCustomSnackbar from '../../hooks/useSnackbar';

import { OutlineButton, PrimaryButton, PrimaryInput, LinkButton, Divider } from '../../reusables';
import { login } from '../../routes/api';
import { APP_ROUTES, AUTHENTICATED_ROUTES } from '../../routes/path';
import { loginValidation } from '../../validations';
import { ReactComponent as EyeIcon } from './../../assets/svgs/eye.svg';
import { UserReducerType } from '../../context/reducers/userReducer';

const SignIn = (): JSX.Element => {
    const history = useHistory();
    const { succesSnackbar, errorSnackbar } = useCustomSnackbar();
    const { addToStore } = useAppStorage();
    const { checkAuthenticated, dispatch } = useGlobalStoreProvider();
    const { MUTATE_USER } = UserReducerType;

    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation(login, {
        onSuccess: async (data) => {
            await addToStore('user', data.data);
            dispatch({ type: MUTATE_USER, payload: data.data });

            succesSnackbar(data.message || 'Success');
            await checkAuthenticated();
            history.push(APP_ROUTES.home);
        },
        onError: (error: any) => {
            errorSnackbar(error?.response?.data?.error || 'Error');
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        },
    });

    const formik = useFormik({
        initialValues: {
            email: '',

            password: '',
        },
        onSubmit: async (values) => {
            const data = {
                email: values.email,
                password: values.password,
            };
            mutate(data);
        },
        validationSchema: loginValidation,
    });

    const { handleSubmit } = formik;
    return (
        <div className="signin">
            <h3 className="signin__title">Sign In</h3>
            <form className="signin__form" onSubmit={handleSubmit}>
                <PrimaryInput
                    placeholder="Email Address"
                    name="email"
                    label="Email Address"
                    formik={formik}
                />
                <PrimaryInput
                    placeholder="Password"
                    name="password"
                    type="password"
                    label="Password"
                    icon={<EyeIcon />}
                    formik={formik}
                />
                <div className="text-right">
                    <Link to={AUTHENTICATED_ROUTES.forgotPassword}>
                        <LinkButton label="Forgot Password?" classes="forgot__button" />
                    </Link>
                </div>
                <PrimaryButton
                    label="Sign In"
                    fullWidth
                    isLoading={isLoading}
                    onClick={handleSubmit}
                />
                <Divider text="OR" classes="" />
                <Link to={AUTHENTICATED_ROUTES.singupProvideDetails}>
                    <OutlineButton label="Create Account" fullWidth />
                </Link>
                <div className="text-center">
                    <LinkButton label="Skip for now?" />
                </div>
            </form>
        </div>
    );
};

export default SignIn;
