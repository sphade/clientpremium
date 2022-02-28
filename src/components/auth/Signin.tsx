/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import {
  OutlineButton,
  PrimaryButton,
  PrimaryInput,
  LinkButton,
  CustomDivider,
} from "../../reusables";
import { AUTHENTICATED_ROUTES } from "../../routes/path";
import { loginValidation } from "../../validations";
import { ReactComponent as EyeIcon } from "./../../assets/svgs/eye.svg";
import { useLogin } from "../../hooks";

const SignIn = (): JSX.Element => {
  const { mutate, isLoading } = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
            <LinkButton
              type="button"
              label="Forgot Password?"
              classes="forgot__button"
            />
          </Link>
        </div>
        <PrimaryButton
          type="submit"
          label="Sign In"
          fullWidth
          isLoading={isLoading}
          onClick={handleSubmit}
        />
        <CustomDivider text="OR" classes="" />
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
