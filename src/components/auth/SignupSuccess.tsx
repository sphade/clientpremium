import React from 'react';
import { PrimaryButton } from '../../reusables';
import { ReactComponent as SuccessSvg } from './../../assets/svgs/successful-account.svg';

const SignupSuccess = () => {
    return (
        <div className="signup__success">
            <SuccessSvg />
            {/* <img src={SuccessSvg} alt="success-icon" /> */}
            <div className="text-center signup__success--body">
                <h3>ACCOUNT CREATED SUCCESSFULLY</h3>
                <p>A mail will be sent to you to confirm registration</p>
                <PrimaryButton label="Get Started" />
            </div>
        </div>
    );
};

export default SignupSuccess;
