import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useStepsProps } from "../../../../hooks/types";
import useCustomSnackbar from "../../../../hooks/useSnackbar";
import { CustomPhoneInput, PrimaryButton } from "../../../../reusables";
import { sendUpdatePhoneOtp } from "../../../../routes/api";

const EnterPhoneNumberModal = ({
  handleChange,
}: {
  handleChange: (value: string) => void;
  steps: useStepsProps;
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  //Snackbar
  const { succesSnackbar, errorSnackbar } = useCustomSnackbar();

  //React query
  const queryClient = useQueryClient();

  //handle Otp

  //Create User
  const { isLoading, mutate } = useMutation(sendUpdatePhoneOtp, {
    onSuccess: () => {
      succesSnackbar("Otp sent successfully");

      handleChange(phoneNumber);
    },
    onError: () => {
      errorSnackbar("Error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const onChange = () => {
    mutate({ phone: `+${phoneNumber}` });
  };

  return (
    <>
      <h3 className="mt-6">Change Phone Number</h3>
      <div className="content">
        <CustomPhoneInput
          handleChange={(phone) => setPhoneNumber(phone)}
          name="phone"
        />
        <PrimaryButton
          classes="!mt-10"
          style={{ backgroundColor: "black" }}
          label="Continue"
          isLoading={isLoading}
          onClick={onChange}
        />
      </div>
    </>
  );
};

export default EnterPhoneNumberModal;
