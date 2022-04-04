import React from "react";
import useGlobalStoreProvider from "../../../context";
import { useWithdrawal } from "../../../hooks";
import { ProvideOtp, WithdrawalDetails } from "./components";
import WalletFunded from "./WalletFunded";

const WithdrawFunds = () => {
  const { state } = useGlobalStoreProvider();

  const {
    user: { phoneNumber },
  } = state;
  const { formik, steps, isSubmitting, completeWithdrawal } = useWithdrawal();

  // Get the current step
  const { currentStep } = steps;

  // Get the correct step
  const stepIndex = currentStep - 1;

  const views = [
    <WithdrawalDetails
      formik={formik}
      isSubmitting={isSubmitting}
      key={1}
      steps={steps}
    />,
    <ProvideOtp
      key={2}
      steps={steps}
      isLoading={isSubmitting}
      details={phoneNumber}
      handleSubmit={(otp) => completeWithdrawal(otp)}
    />,
    <WalletFunded
      message="You fund has been withdrawn successfully!"
      key={3}
    />,
  ];

  return views[stepIndex];
};

export default WithdrawFunds;
