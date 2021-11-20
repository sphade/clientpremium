import React, { useState } from 'react';
import { useSteps } from '../../hooks';
import { ChooseType, EnterEmailOrPhone, PasswordRessetSuccess, ResetPassord } from './MiniWidgets';

export enum PasswordResetEnum {
    EMAIL = 'EMAIL',
    PHONE_NUMBER = 'PHONENUMBER',
}

const ForgotPassword = () => {
    // Generate steps
    const steps = useSteps(4);
    // Get the current step
    const { currentStep } = steps;

    // Get the correct step
    const stepIndex = currentStep - 1;

    const [type, setType] = useState<string>('');

    const handleChecked = (value: string) => {
        setType(value);
    };

    //Views
    const views = [
        <ChooseType type={type} handleChecked={handleChecked} key={1} steps={steps} />,
        <EnterEmailOrPhone key={2} steps={steps} type={type} />,
        <ResetPassord key={3} steps={steps} />,
        <PasswordRessetSuccess key={4} />,
    ];

    return (
        <div className="signin text-center">
            <h3></h3>
            {views[stepIndex]}
        </div>
    );
};

export default ForgotPassword;
