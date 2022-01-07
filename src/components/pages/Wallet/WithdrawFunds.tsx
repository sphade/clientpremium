import React from "react";
import { useSteps } from "../../../hooks";
import { EnterPhoneNumber, ProvideOtp, WithdrawalDetails } from "./components";
import WalletFunded from "./WalletFunded";

const WithdrawFunds = () => {
  const steps = useSteps(4);

  // Get the current step
  const { currentStep } = steps;

  // Get the correct step
  const stepIndex = currentStep - 1;

  const views = [
    <WithdrawalDetails key={1} steps={steps} />,
    <EnterPhoneNumber key={2} steps={steps} />,
    <ProvideOtp key={3} steps={steps} />,
    <WalletFunded
      message="You fund has been withdrawn successfully!"
      key={4}
    />,
  ];

  return views[stepIndex];
};

export default WithdrawFunds;
