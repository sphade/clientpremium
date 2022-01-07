import React, { useState } from "react";
import OtpInput from "react-otp-input";

import { useCountdown } from "../../../../hooks";
import { useStepsProps } from "../../../../hooks/types";

import { CustomCard, LinkButton, PrimaryButton } from "../../../../reusables";

const ProvideOtp = ({ steps }: { steps: useStepsProps }) => {
  // Destructure next step from steps
  const { nextStep, previousStep } = steps;
  //Handle countdownt imer
  const {
    minutesLeft,
    secondsLeft,
    // start: startOtpCountdown,
    isOver,
    isRunning,
  } = useCountdown({ minutes: 2 });

  //handle Otp
  const [otp, setOtp] = useState("");

  // //Start countdown on page load
  // useEffect(() => {
  //   startOtpCountdown();
  // }, []);

  return (
    <CustomCard header="PHONE NUMBER" goBack={previousStep}>
      <div className="signup__otp">
        <p className="phone__number">
          Enter the 6 digit verification code sent to:
          <span>+234 8038455124</span>
        </p>
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

        <p className="resend__code">
          <span>
            {!isOver ? (
              `Resend code in ${minutesLeft}:${secondsLeft}`
            ) : (
              <span>You can now resend otp</span>
            )}
          </span>{" "}
        </p>
        <PrimaryButton
          label="Withdraw Fund"
          disabled={isRunning}
          onClick={nextStep}
        />
        <LinkButton label="Didn’t get the code? Use email" />
      </div>
    </CustomCard>
  );
};

export default ProvideOtp;
