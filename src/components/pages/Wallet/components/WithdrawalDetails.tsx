import React from "react";
import { useStepsProps } from "../../../../hooks/types";
import {
  CustomCard,
  PrimaryButton,
  PrimaryInput,
  PrimarySelect,
} from "../../../../reusables";
import { BANKS } from "../constants";

const WithdrawalDetails = ({ steps }: { steps: useStepsProps }) => {
  // Destructure next step from steps
  const { nextStep } = steps;

  return (
    <CustomCard header="Withdrawal Details">
      <div style={{ padding: "0 4rem" }}>
        <PrimaryInput
          placeholder="Enter Amount"
          name="amount"
          label="Enter Amount"
        />
        <PrimarySelect name="bank" label="Choose your bank" options={BANKS} />
        <PrimaryInput
          placeholder="Account Name"
          name="accountName"
          label="Account Name"
        />
        <PrimaryInput
          placeholder="Account Number"
          name="accountNumber"
          label="Account Number"
        />
        <PrimaryButton label="Proceed" onClick={nextStep} fullWidth />
      </div>
    </CustomCard>
  );
};

export default WithdrawalDetails;
