import React from "react";
import useGlobalStoreProvider from "../../context";
import { useLogin } from "../../hooks";
import { PrimaryButton } from "../../reusables";
import { ReactComponent as SuccessSvg } from "./../../assets/svgs/successful-account.svg";

const SignupSuccess = () => {
  //Global Store
  const { state } = useGlobalStoreProvider();

  const { mutate, isLoading } = useLogin();

  const handleSubmit = () => {
    const { email, password } = state.signupInfo;
    const data = {
      email,
      password,
    };
    mutate(data);
  };

  return (
    <div className="signup__success">
      <SuccessSvg />
      {/* <img src={SuccessSvg} alt="success-icon" /> */}
      <div className="text-center signup__success--body">
        <h3>ACCOUNT CREATED SUCCESSFULLY</h3>
        <p>A mail will be sent to you to confirm registration</p>
        <PrimaryButton
          fullWidth
          isLoading={isLoading}
          label="Get Started"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default SignupSuccess;
