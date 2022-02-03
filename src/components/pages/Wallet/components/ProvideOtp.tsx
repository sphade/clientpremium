import React, { useState } from "react";
import OtpInput from "react-otp-input";

import { useCountdown } from "../../../../hooks";
import { useStepsProps } from "../../../../hooks/types";

import { CustomCard, LinkButton, PrimaryButton } from "../../../../reusables";

const ProvideOtp = ({
  handleSubmit,
  isLoading = false,
  details = {},
}: {
  steps: useStepsProps;
  isLoading?: boolean;
  handleSubmit?: (otp: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  details?: Record<string, any>;
}) => {
  // Destructure next step from steps
  //Handle countdownt imer
  const {
    minutesLeft,
    secondsLeft,
    // start: startOtpCountdown,
    isOver,
  } = useCountdown({ minutes: 2 });

  //handle Otp
  const [otp, setOtp] = useState("");

  const {
    phoneNumber = "",
    okText = "Withdraw Fund",
    isModal = false,
    header = "Phone Number Verification",
  } = details;

  return (
    <CustomCard header={header} isModal={isModal}>
      <div className="signup__otp">
        <p className="phone__number">
          Enter the 6 digit verification code sent to:
          <span>{phoneNumber}</span>
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
          label={okText}
          isLoading={isLoading}
          onClick={() => {
            handleSubmit && handleSubmit(otp);
          }}
        />
        <div className="mt-8">
          <LinkButton label="Didn’t get the code? Use email" />
        </div>
      </div>
    </CustomCard>
  );
};

export default ProvideOtp;
