import React from "react";
import { useStepsProps } from "../../../../hooks/types";
import {
  CustomCard,
  CustomPhoneInput,
  PrimaryButton,
} from "../../../../reusables";

const EnterPhoneNumber = ({ steps }: { steps: useStepsProps }) => {
  // Destructure next step from steps
  const { nextStep, previousStep } = steps;

  return (
    <CustomCard header="PHONE NUMBER" goBack={previousStep}>
      <div style={{ padding: "0 4rem" }} className="enter__phone">
        <p>A code would be sent to this number to comfirm it’s truly yours.</p>
        <CustomPhoneInput name="phoneNumber" />
        <PrimaryButton label="Get Code" onClick={nextStep} fullWidth />
      </div>
    </CustomCard>
  );
};

export default EnterPhoneNumber;
