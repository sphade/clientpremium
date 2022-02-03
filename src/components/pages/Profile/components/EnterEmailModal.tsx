import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useStepsProps } from "../../../../hooks/types";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import { PrimaryButton, PrimaryInput } from "../../../../reusables";
import { sendUpdateEmailOtp } from "../../../../routes/api";

const EnterEmailModal = ({
  handleChange,
}: {
  handleChange: (value: string) => void;
  steps: useStepsProps;
}) => {
  const [email, setEmail] = useState("");

  //Snackbar
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  //React query
  const queryClient = useQueryClient();

  //Create User
  const { isLoading, mutate } = useMutation(sendUpdateEmailOtp, {
    onSuccess: () => {
      succesSnackbar("Otp sent successfully");

      handleChange(email);
    },
    onError: () => {
      errorSnackbar("Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const onChange = () => {
    mutate({ email });
  };

  return (
    <>
      <h3 className="mt-6">Change Email</h3>
      <div className="content">
        <PrimaryInput
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
          name="email"
          label="Email Address"
        />

        <PrimaryButton
          classes="!mt-0"
          style={{ backgroundColor: "black" }}
          label="Continue"
          isLoading={isLoading}
          onClick={onChange}
        />
      </div>
    </>
  );
};

export default EnterEmailModal;
