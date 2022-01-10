import React from "react";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../reusables";
import { AUTHENTICATED_ROUTES } from "../../routes/path";
import { ReactComponent as SuccessSvg } from "./../../assets/svgs/successful-account.svg";

const SignupSuccess = () => {
  const history = useHistory();

  return (
    <div className="signup__success">
      <SuccessSvg />
      {/* <img src={SuccessSvg} alt="success-icon" /> */}
      <div className="text-center signup__success--body">
        <h3>ACCOUNT CREATED SUCCESSFULLY</h3>
        <p>A mail will be sent to you to confirm registration</p>
        <PrimaryButton
          fullWidth
          label="Get Started"
          onClick={() => {
            history.push(AUTHENTICATED_ROUTES.signin);
          }}
        />
      </div>
    </div>
  );
};

export default SignupSuccess;
