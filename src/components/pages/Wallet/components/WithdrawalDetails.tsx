import React from "react";
import { useQuery } from "react-query";
import { useStepsProps } from "../../../../hooks/types";
import {
  CustomCard,
  PrimaryButton,
  PrimaryInput,
  PrimarySelect,
} from "../../../../reusables";
import { ICustomFormikProps } from "../../../../reusables/Input/types";
import { getBanksApi } from "../../../../routes/api";

const WithdrawalDetails = ({
  steps,
  formik,
  isSubmitting = false,
}: {
  steps: useStepsProps;
  formik: ICustomFormikProps;
  isSubmitting?: boolean;
}) => {
  // Destructure next step from steps
  const { nextStep } = steps;

  const { data = [] } = useQuery("banks", getBanksApi);

  const { handleSubmit } = formik;

  const banks = data.map((d: any) => ({ ...d, value: d.code }));

  return (
    <CustomCard header="Withdrawal Details">
      <div style={{ padding: "0 4rem" }}>
        <PrimaryInput
          placeholder="Enter Amount"
          name="amount"
          type="amount"
          label="Enter Amount"
          formik={formik}
        />
        <PrimarySelect
          name="bankCode"
          label="Choose your bank"
          options={banks}
          formik={formik}
        />
        <PrimaryInput
          placeholder="Account Name"
          name="accountName"
          label="Account Name"
          formik={formik}
        />
        <PrimaryInput
          placeholder="Account Number"
          name="bankAccountNumber"
          label="Account Number"
          formik={formik}
        />
        <PrimaryInput
          placeholder="Narration"
          name="narration"
          label="Narration"
          formik={formik}
        />
        <PrimaryButton
          label="Proceed"
          isLoading={isSubmitting}
          onClick={handleSubmit}
          fullWidth
        />
      </div>
    </CustomCard>
  );
};

export default WithdrawalDetails;
