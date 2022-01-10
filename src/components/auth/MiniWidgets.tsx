import React, { useEffect, useState } from "react";
import { useStepsProps } from "../../hooks/types";
import { LinkButton, PrimaryButton, PrimaryInput } from "../../reusables";
import { ReactComponent as EyeIcon } from "./../../assets/svgs/eye.svg";
import { PasswordResetEnum } from "./ForgotPassword";
import { ReactComponent as SuccessSvg } from "./../../assets/svgs/successful-account.svg";
import { useFormik } from "formik";
import {
  forgotPasswordValidaiton,
  resetPasswordValidation,
} from "../../validations";
import { useMutation, useQueryClient } from "react-query";
import useCustomSnackbar from "../../hooks/useSnackbar";
import { forgotPassword, resetPassword } from "../../routes/api";
import { ResetPassordType } from "../../context/reducers/userReducer";
import useGlobalStoreProvider from "../../context";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router";
import { AUTHENTICATED_ROUTES } from "../../routes/path";

type EnterEmailOrPhoneProps = {
  type: string;
  steps: useStepsProps;
};

type ChooseTypeProps = {
  type: string;
  handleChecked: (value: string) => void;
  steps: useStepsProps;
};

export const ChooseType = ({ steps, handleChecked, type }: ChooseTypeProps) => {
  // Destructure next step from steps
  const { nextStep } = steps;
  //  Check
  const { EMAIL, PHONE_NUMBER } = PasswordResetEnum;

  return (
    <div className="forgot__password">
      <h3>FORGOT PASSWORD</h3>
      <p>Choose recover password option</p>
      <div className="form__group">
        <div className="checkbox__group">
          <input
            type="checkbox"
            name="email"
            value={EMAIL}
            onChange={(e) => handleChecked(e.target.value)}
            checked={type === EMAIL}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="checkbox__group">
          <input
            type="checkbox"
            name="phoneNumber"
            value={PHONE_NUMBER}
            onChange={(e) => handleChecked(e.target.value)}
            checked={type === PHONE_NUMBER}
          />
          <label htmlFor="phoneNumber">PhoneNumber</label>
        </div>
        <PrimaryButton
          fullWidth
          classes="dark"
          label="Confirm"
          onClick={() => nextStep()}
        />
      </div>
    </div>
  );
};

export const EnterEmailOrPhone = ({
  type,
  steps,
}: EnterEmailOrPhoneProps): JSX.Element => {
  const emailType = type === PasswordResetEnum.EMAIL;
  const { nextStep } = steps;
  const { dispatch } = useGlobalStoreProvider();
  const { STORE_PASSWORD_DETAILS } = ResetPassordType;

  const queryClient = useQueryClient();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { mutate, isLoading } = useMutation(forgotPassword, {
    onSuccess: (data) => {
      succesSnackbar(data.message || "Success");
      nextStep();
    },
    // eslint-disable-next-line
    onError: (error: any) => {
      errorSnackbar(error?.response?.data?.error || "Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      dispatch({ type: STORE_PASSWORD_DETAILS, payload: values });

      const data = {
        email: values.email,
      };
      mutate(data);
    },
    validationSchema: forgotPasswordValidaiton,
  });

  const { handleSubmit } = formik;

  return (
    <form className="forgot__password" onSubmit={handleSubmit}>
      <h3>FORGOT PASSWORD</h3>
      <p>
        {emailType
          ? "A reset code would be emailed to you shortly"
          : "A reset code would be sent to you shortly"}
      </p>

      <div>
        <div className="form__group">
          {emailType ? (
            <PrimaryInput
              placeholder="Email"
              name="email"
              formik={formik}
              type="email"
              label="Email"
            />
          ) : (
            <PrimaryInput
              placeholder="Phone Number"
              name="phoneNumber"
              type="number"
              label="Phone Number"
            />
          )}
        </div>

        <PrimaryButton
          fullWidth
          classes="dark"
          label="Send Code"
          onClick={handleSubmit}
          isLoading={isLoading}
        />
        <div className="text-center">
          <LinkButton label="Didn’t get the code? Use email" />
        </div>
      </div>
    </form>
  );
};

export const ResetPassord = ({
  steps,
}: {
  steps: useStepsProps;
}): JSX.Element => {
  //handle Otp
  const [otp, setOtp] = useState("");
  const { nextStep } = steps;

  //const history
  const history = useHistory();

  const { state, dispatch } = useGlobalStoreProvider();
  const { STORE_PASSWORD_DETAILS } = ResetPassordType;

  const queryClient = useQueryClient();

  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  const { jumpToStep } = steps;

  const { mutate, isLoading } = useMutation(resetPassword, {
    onSuccess: (data) => {
      succesSnackbar(data.message || "Success");
      nextStep();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      errorSnackbar(error?.response?.data?.error || "Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  useEffect(() => {
    if (!state.email) {
      history.push(AUTHENTICATED_ROUTES.forgotPassword);
    }
  }, []);

  //formik
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      dispatch({ type: STORE_PASSWORD_DETAILS, payload: values });

      if (!state?.password?.email) {
        jumpToStep(1);
        return;
      }

      if (otp.length < 6) {
        errorSnackbar("Please enter a valid otp");
        return;
      }

      const data = {
        email: state?.password?.email,
        otp: otp,
        newPassword: values.password,
      };
      mutate(data);
    },
    validationSchema: resetPasswordValidation,
  });

  const { handleSubmit } = formik;

  return (
    <div className="forgot__password">
      <h3>FORGOT PASSWORD</h3>
      <p>You can now create a new passwaord</p>

      <p className="phone__number">
        Enter the 6 digit verification code sent to{" "}
        <span>{state?.password?.email}</span>
      </p>

      <form className="form__group" onSubmit={handleSubmit}>
        <div className="otp__box">
          <OtpInput
            value={otp}
            inputStyle="otp__input"
            onChange={(value: string) => {
              setOtp(value);
            }}
            numInputs={6}
            isInputNum
            separator={<span></span>}
          />
        </div>

        <PrimaryInput
          placeholder="Password"
          formik={formik}
          name="password"
          type="password"
          label="Password"
          icon={<EyeIcon />}
        />
        <PrimaryInput
          placeholder="Confirm Password"
          formik={formik}
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          icon={<EyeIcon />}
        />
        <PrimaryButton
          fullWidth
          classes="dark"
          label="Reset Password"
          onClick={handleSubmit}
          isLoading={isLoading}
        />
      </form>
    </div>
  );
};

export const PasswordRessetSuccess = () => {
  const history = useHistory();
  return (
    <div className="signup__success">
      <SuccessSvg />
      {/* <img src={SuccessSvg} alt="success-icon" /> */}
      <div className="text-center signup__success--body">
        <h3>PASSWORD RESET SUCCESSFUL</h3>
        <p>You can now sign into your Bossbus Premium Account</p>
        <PrimaryButton
          fullWidth
          label="Sign In"
          onClick={() => history.push(AUTHENTICATED_ROUTES.signin)}
        />
      </div>
    </div>
  );
};
